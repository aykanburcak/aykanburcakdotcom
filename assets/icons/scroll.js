function ScrollIcon(props) {
  return (
    <svg
      width={38}
      height={78}
      viewBox="0 0 38 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0)" fill="#273340">
        <path d="M19 6.382a3.562 3.562 0 00-3.563 3.562v4.75a3.562 3.562 0 107.126 0v-4.75A3.562 3.562 0 0019 6.382zm1.188 8.313a1.188 1.188 0 01-2.375 0v-4.75a1.188 1.188 0 012.375 0v4.75z" />
        <path d="M19 .444c-7.214 0-13.063 5.849-13.063 13.063v11.875c0 7.214 5.849 13.062 13.063 13.062s13.063-5.848 13.063-13.062V13.507C32.063 6.293 26.213.444 19 .444zm10.688 24.938c0 5.893-4.794 10.687-10.688 10.687-5.894 0-10.688-4.794-10.688-10.687V13.507C8.313 7.613 13.107 2.819 19 2.819c5.894 0 10.688 4.794 10.688 10.688v11.875z" />
      </g>
      <g
        clipPath="url(#clip1)"
        stroke="#273340"
        strokeWidth={2}
        strokeLinecap="round"
      >
        <path d="M18.698 42.983V59.66" strokeMiterlimit={10} />
        <path
          d="M12.444 53.407l6.254 6.254 6.255-6.255"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" transform="translate(0 .444)" d="M0 0H38V38H0z" />
        </clipPath>
        <clipPath id="clip1">
          <path
            fill="#fff"
            transform="rotate(45 -32.47 39.893)"
            d="M0 0H23.5866V23.5866H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ScrollIcon
