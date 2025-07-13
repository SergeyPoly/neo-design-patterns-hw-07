import { BaseRenderer } from './BaseRenderer';

export class HTMLRenderer extends BaseRenderer {
  renderHeader(level: number, text: string): string {
    const tag = level === 1 ? 'h1' : 'h' + level;
    return `<${tag}>${this.escape(text)}</${tag}>`;
  }
  renderParagraph(text: string): string {
    return `<p>${this.escape(text)}</p>`;
  }
  renderList(items: string[]): string {
    const lis = items.map(i => `<li>${this.escape(i)}</li>`).join('');
    return `<ul>${lis}</ul>`;
  }
  wrapDocument(content: string): string {
    return `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>Document</title></head>
<body>
${content}
</body>
</html>`;
  }
}
