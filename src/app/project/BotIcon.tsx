interface PropTypes {
  height: string
}

function BotIcon({ height }: PropTypes) {
  return (
    <svg
      height={height}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_43_160)">
        <path
          d="M13.75 12C14.0455 12 14.3381 12.0582 14.611 12.1713C14.884 12.2843 15.1321 12.4501 15.341 12.659C15.5499 12.8679 15.7157 13.116 15.8287 13.389C15.9418 13.6619 16 13.9545 16 14.25V15.155C16.0001 15.6956 15.8834 16.2297 15.6578 16.721C15.4322 17.2122 15.1031 17.6488 14.693 18.001C13.127 19.345 10.887 20 7.997 20C5.107 20 2.869 19.344 1.306 18C0.896462 17.6481 0.567754 17.2119 0.342351 16.7212C0.116949 16.2305 0.000170038 15.697 0 15.157V14.249C0.00026514 13.6524 0.237435 13.0804 0.659363 12.6587C1.08129 12.2369 1.65344 12 2.25 12H13.75ZM7.895 0.0079999L7.997 0C8.17824 7.6429e-06 8.35334 0.0656426 8.48993 0.184767C8.62652 0.303891 8.71535 0.468446 8.74 0.648L8.747 0.75V1.5H12.247C12.8437 1.5 13.416 1.73705 13.838 2.15901C14.2599 2.58097 14.497 3.15326 14.497 3.75V8.255C14.497 8.85174 14.2599 9.42403 13.838 9.84599C13.416 10.2679 12.8437 10.505 12.247 10.505H3.747C3.15026 10.505 2.57797 10.2679 2.15601 9.84599C1.73405 9.42403 1.497 8.85174 1.497 8.255V3.75C1.497 3.15326 1.73405 2.58097 2.15601 2.15901C2.57797 1.73705 3.15026 1.5 3.747 1.5H7.247V0.751C7.24701 0.569762 7.31264 0.394658 7.43177 0.25807C7.55089 0.121481 7.71545 0.0326482 7.895 0.0079999ZM5.747 4.5C5.41548 4.5 5.09754 4.6317 4.86312 4.86612C4.6287 5.10054 4.497 5.41848 4.497 5.75C4.497 6.08152 4.6287 6.39946 4.86312 6.63388C5.09754 6.8683 5.41548 7 5.747 7C6.07852 7 6.39646 6.8683 6.63088 6.63388C6.8653 6.39946 6.997 6.08152 6.997 5.75C6.997 5.41848 6.8653 5.10054 6.63088 4.86612C6.39646 4.6317 6.07852 4.5 5.747 4.5ZM10.24 4.5C10.0729 4.49527 9.90663 4.5241 9.7509 4.58476C9.59517 4.64543 9.45319 4.73671 9.33335 4.8532C9.21352 4.9697 9.11826 5.10904 9.05321 5.26299C8.98816 5.41694 8.95465 5.58237 8.95465 5.7495C8.95465 5.91663 8.98816 6.08206 9.05321 6.23601C9.11826 6.38996 9.21352 6.5293 9.33335 6.64579C9.45319 6.76229 9.59517 6.85357 9.7509 6.91424C9.90663 6.9749 10.0729 7.00373 10.24 6.999C10.5653 6.9898 10.8741 6.85412 11.1009 6.6208C11.3278 6.38747 11.4546 6.0749 11.4546 5.7495C11.4546 5.4241 11.3278 5.11153 11.1009 4.8782C10.8741 4.64488 10.5653 4.5092 10.24 4.5Z"
          fill="white"
        />
      </g>
    </svg>
  )
}

export default BotIcon
