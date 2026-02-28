export function kingMessage() {
  const messages = [
    "Yep, that's pizza",
    "Don't eat the baidehis",
    "Additional pizza required",
    "You do not have enough pizza",
  ];
  const random = Math.floor(Math.random() * messages.length);

  return messages[random];
}
