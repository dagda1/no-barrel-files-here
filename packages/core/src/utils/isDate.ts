export default function isDate(value: unknown): value is Date {
  return (
    value instanceof Date || (typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]')
  );
}
