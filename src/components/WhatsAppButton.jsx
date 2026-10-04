import React from 'react';

export default function WhatsAppButton({
  phone = '918683828646',
  message = "Hi Xntrova, I would like to know more about your services and I'm interested in connecting with you."
}) {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMsg}`;

  return (
    <aside className="whatsapp-floating-wrap" aria-label="WhatsApp Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-floating-btn"
        aria-label="Chat with Xntrova on WhatsApp"
        title="Chat with Xntrova on WhatsApp"
      >
        <span className="whatsapp-pulse-aura" aria-hidden="true" />
        
        {/* Official WhatsApp SVG Icon */}
        <svg
          className="whatsapp-icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.476-.15-.676.15-.2.301-.776.979-.952 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.675-2.085-.176-.301-.019-.464.132-.614.135-.135.301-.351.451-.527.151-.175.201-.301.301-.501.101-.2.05-.376-.025-.526-.075-.151-.676-1.631-.927-2.233-.244-.587-.492-.507-.676-.516l-.576-.01c-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.909 1.228 3.11c.151.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.634.721.23 1.378.197 1.9.119.58-.088 1.78-.727 2.031-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.201-.576-.351z" />
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 1.892.526 3.662 1.439 5.176L2 22l4.981-1.306A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2a8.16 8.16 0 0 1-4.162-1.135l-.298-.177-3.088.81.824-3.01-.194-.31A8.165 8.165 0 1 1 12 20.2z" />
        </svg>

        <span className="whatsapp-tooltip">
          <span className="tooltip-title">Chat with us</span>
          <span className="tooltip-sub">Instant response on WhatsApp</span>
        </span>
      </a>
    </aside>
  );
}
