"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { addTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

// server actions
/* USANDO SERVER ACTIONS (DO NEXTS) (EXECUTA DO LADO DO SERVIDOR), E PODE CHAMAR ELA APARTIR DE UM CLIENT COMPONENTS */

interface AddTransactionsParams {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const addTransaction = async (params: AddTransactionsParams) => {
  addTransactionSchema.parse(params);
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Não autorizado, recarregue a página e tente novamente");
  }
  await db.transaction.create({
    data: { ...params, userId },
  });
  // comando atualiza a pagina apos envio da transacao
  revalidatePath("/transactions");
};
