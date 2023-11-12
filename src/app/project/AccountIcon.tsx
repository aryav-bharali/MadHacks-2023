interface PropTypes {
  height: string
  fill?: string
}

function AccountIcon({ height, fill }: PropTypes) {
  return (
    <svg
      height={height}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.75 12C14.958 12 15.944 12.953 15.997 14.148L15.996 14.25H8V15.249L15.975 15.25C15.9142 15.7809 15.7406 16.2926 15.466 16.751L8 16.749V17.749L14.638 17.751C13.078 19.257 10.848 20.001 7.996 20.001C4.85 20.001 2.464 19.096 0.898 17.261C0.318608 16.5823 0.000207472 15.7193 2.2244e-07 14.827V14.249C-0.000131129 13.9537 0.0579109 13.6612 0.170812 13.3883C0.283714 13.1154 0.449264 12.8674 0.65801 12.6584C0.866756 12.4495 1.11461 12.2837 1.38742 12.1706C1.66023 12.0574 1.95266 11.9991 2.248 11.999H13.75V12ZM7.996 0C9.632 0 11.084 0.785 11.996 2H7.999V2.999L12.58 3C12.784 3.468 12.919 3.972 12.971 4.5H7.998V5.5L12.971 5.502C12.92 6.01938 12.788 6.52554 12.58 7.002L7.998 7L7.999 8.001L11.995 8.002C11.4834 8.68347 10.8061 9.22287 10.0274 9.56899C9.24865 9.91511 8.39442 10.0565 7.54573 9.97964C6.69704 9.90281 5.88208 9.61035 5.17819 9.13003C4.4743 8.6497 3.90486 7.99744 3.52392 7.23517C3.14297 6.47291 2.96317 5.62592 3.00158 4.77463C3.03999 3.92334 3.29534 3.096 3.74338 2.37113C4.19142 1.64627 4.81729 1.04794 5.56157 0.632952C6.30585 0.217964 7.14384 8.5352e-05 7.996 0Z"
        fill={fill || 'white'}
      />
    </svg>
  )
}

export default AccountIcon