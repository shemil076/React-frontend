export function getFormattedDate(dateInput: Date): string {
    const date: Date = new Date(dateInput);
  
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
  
    return dateInput.toLocaleDateString('en-US', options);
}