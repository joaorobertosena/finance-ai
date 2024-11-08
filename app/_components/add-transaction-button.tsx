"use client";

import { Button } from "./ui/button";
import { ArrowDownUpIcon } from "lucide-react";

import { useState } from "react";
import UpsertTransactionDialog from "./ui/upsert-transaction-dialog";

const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        className="rounded-full font-bold"
        onClick={() => setDialogIsOpen(true)}
      >
        Adiconar transação
        <ArrowDownUpIcon />
      </Button>

      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};

export default AddTransactionButton;
