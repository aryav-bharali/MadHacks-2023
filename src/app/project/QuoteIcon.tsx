interface PropTypes {
  height: string
}

function QuoteIcon({ height }: PropTypes) {
  return (
    <svg
      height={height}
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_45_163)">
        <path
          d="M7.724 5.447C7.12023 5.447 6.5412 5.68684 6.11427 6.11377C5.68734 6.5407 5.4475 7.11973 5.4475 7.7235C5.4475 8.32727 5.68734 8.9063 6.11427 9.33323C6.5412 9.76015 7.12023 10 7.724 10C8.32777 10 8.9068 9.76015 9.33373 9.33323C9.76066 8.9063 10.0005 8.32727 10.0005 7.7235C10.0005 7.11973 9.76066 6.5407 9.33373 6.11377C8.9068 5.68684 8.32777 5.447 7.724 5.447ZM0 2.5C0 1.83696 0.263392 1.20107 0.732233 0.732233C1.20107 0.263392 1.83696 0 2.5 0H14C14.3283 0 14.6534 0.0646644 14.9567 0.190301C15.26 0.315938 15.5356 0.500087 15.7678 0.732233C15.9999 0.96438 16.1841 1.23998 16.3097 1.54329C16.4353 1.84661 16.5 2.1717 16.5 2.5V16.75C16.5 16.9489 16.421 17.1397 16.2803 17.2803C16.1397 17.421 15.9489 17.5 15.75 17.5H1.5C1.5 17.7652 1.60536 18.0196 1.79289 18.2071C1.98043 18.3946 2.23478 18.5 2.5 18.5H15.75C15.9489 18.5 16.1397 18.579 16.2803 18.7197C16.421 18.8603 16.5 19.0511 16.5 19.25C16.5 19.4489 16.421 19.6397 16.2803 19.7803C16.1397 19.921 15.9489 20 15.75 20H2.5C1.83696 20 1.20107 19.7366 0.732233 19.2678C0.263392 18.7989 0 18.163 0 17.5V2.5ZM10.819 9.795C11.3332 9.02649 11.5432 8.09416 11.408 7.17941C11.2727 6.26466 10.802 5.43294 10.0874 4.84609C9.37283 4.25923 8.46546 3.95923 7.54188 4.00444C6.6183 4.04966 5.74458 4.43687 5.09072 5.09072C4.43687 5.74458 4.04966 6.6183 4.00445 7.54188C3.95923 8.46546 4.25923 9.37283 4.84609 10.0874C5.43294 10.802 6.26466 11.2727 7.17941 11.408C8.09416 11.5432 9.02649 11.3332 9.795 10.819L12.271 13.294L12.338 13.352L12.346 13.358C12.4929 13.4646 12.6746 13.5121 12.8549 13.4911C13.0352 13.4701 13.201 13.3821 13.3195 13.2446C13.438 13.1071 13.5006 12.9301 13.4947 12.7487C13.4889 12.5672 13.4151 12.3946 13.288 12.265L10.818 9.795H10.819Z"
          fill="#fff"
        />
      </g>
    </svg>
  )
}

export default QuoteIcon