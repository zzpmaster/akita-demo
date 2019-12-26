export interface Card {
  id: number | string;
  title: string | null;
  subtitle?: string;
  command?: string;
}

export function createCard(params: Partial<Card>) {
  return {
    title: ''
  } as Card;
}
