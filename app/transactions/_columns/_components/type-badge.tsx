import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type == TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Depósito
      </Badge>
    ); //componente verde
  }
  if (transaction.type == TransactionType.EXPENSE) {
    return (
      <Badge className="hover:bg-danger bg-Danger bg-opacity-10 font-bold text-Danger">
        <CircleIcon className="mr-2 fill-Danger" size={10} />
        Despesa
      </Badge>
    );
  }
  if (transaction.type == TransactionType.INVESTMENT) {
    return (
      <Badge className="hover:bg-slate-240 bg-white bg-opacity-10 font-bold text-white">
        <CircleIcon className="mr-2 fill-white" size={10} />
        Investimento
      </Badge>
    ); //componente verde
  }
};

export default TransactionTypeBadge;
