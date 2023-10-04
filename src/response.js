function getBotResponse(input) {
  if (input.includes("where is my order")) {
    return "Your order is currently in transit and should arrive within 2-3 business days.";
  } else if (input.includes("how do i track my order")) {
    return "You can track your order by logging into your account and going to the 'Order History' section.";
  } else if (input.includes("cancel my order")) {
    return "To cancel your order, please contact our customer support at support@example.com.";
  } else if (input.includes("order details")) {
    return "Sure, I'd be happy to help you with your order. Please provide your order number or any other relevant details so that I can assist you better.";
  } else if (input.includes("hi") || input.includes("hello")) {
    return "Hello! Welcome to our customer support. How can I assist you with your order today? If you have any questions or concerns about your order, feel free to ask!";
  } else {
    return "I'm here to assist you with your order. If you have any questions about your order status, tracking, or anything related to your purchase, please let me know.";
  }
}
