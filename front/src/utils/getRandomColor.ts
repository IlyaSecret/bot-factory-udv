import { colors } from '../components/chat-item/colors';
export function getRandomColor(): string {
    const randomValue = Math.floor(Math.random() * ((colors.length - 1) - 0) + 0)
    return colors[randomValue];
  }