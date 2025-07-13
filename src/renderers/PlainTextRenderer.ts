import { BaseRenderer } from './BaseRenderer';

export class PlainTextRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    return `${text.toUpperCase()}\n${'-'.repeat(text.length)}`;
  }
  renderParagraph(text: string): string {
    return text;
  }
  renderList(items: string[]): string {
    return items.map((i, idx) => `${idx + 1}. ${i}`).join('\n');
  }
}
