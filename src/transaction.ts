export type TransactionCommand =
  | { kind: "moveCall"; target: string; typeArguments?: string[]; arguments: string[] }
  | { kind: "transferObjects"; objects: string[]; recipient: string };

export class TransactionPlan {
  private readonly commands: TransactionCommand[] = [];

  moveCall(target: string, args: string[], typeArguments: string[] = []): this {
    if (!target.trim()) throw new Error("target is required");
    this.commands.push({ kind: "moveCall", target, arguments: [...args], typeArguments: [...typeArguments] });
    return this;
  }

  transferObjects(objects: string[], recipient: string): this {
    if (!objects.length) throw new Error("at least one object is required");
    if (!recipient.trim()) throw new Error("recipient is required");
    this.commands.push({ kind: "transferObjects", objects: [...objects], recipient });
    return this;
  }

  toJSON(): TransactionCommand[] {
    return this.commands.map((command) => ({ ...command }));
  }
}
