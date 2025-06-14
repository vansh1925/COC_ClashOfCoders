export const generateCode = () => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from({length: 6}, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}