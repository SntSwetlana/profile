import * as React from "react"
export const TwitterIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.23em"
    height="1em"
    viewBox="0 0 256 209"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);

export const GitHubIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);
 
export const LinkedInIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const PintresIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v256H0z" />
    <path
      fill="#CB1F27"
      d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239-.36-8.938-.064-19.668 2.228-29.393 2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136 11.643 0 17.268 8.745 17.268 19.217 0 11.704-7.465 29.211-11.304 45.426-3.207 13.578 6.808 24.653 20.203 24.653 24.252 0 40.586-31.149 40.586-68.055 0-28.054-18.895-49.052-53.262-49.052-38.828 0-63.017 28.956-63.017 61.3 0 11.152 3.288 19.016 8.438 25.106 2.368 2.797 2.697 3.922 1.84 7.134-.614 2.355-2.024 8.025-2.608 10.272-.852 3.242-3.479 4.401-6.409 3.204-17.884-7.301-26.213-26.886-26.213-48.902 0-36.361 30.666-79.961 91.482-79.961 48.87 0 81.035 35.364 81.035 73.325 0 50.213-27.916 87.726-69.066 87.726-13.819 0-26.818-7.47-31.271-15.955 0 0-7.431 29.492-9.005 35.187-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0 57.314 0 0 57.309 0 128.002Z"
    />
  </svg>
);

export const DribbleIcon = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v256H0z" />
    <path
      fill="#E74D89"
      d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
    />
    <path
      fill="#B2215A"
      d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
    />
  </svg>
);

export const LinkArrow = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);

export const CircularText = ({className, ...rest}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 1080 1080"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      d="M397.995 117.41s-.003.098.308-.27c-3.073-13.025-6.457-25.682-9.92-38.632l21.958-5.851 18.387 68.09 36.79-9.818 4.844 18.414c-10.229 2.737-19.836 5.301-29.44 7.88-9.695 2.602-19.387 5.218-29.277 7.881-2.682-10.016-5.068-19.33-7.688-28.576-1.82-6.42-3.964-12.749-5.962-19.118z"
    />
    <path
      d="M743.292 893.03a330.09 330.09 0 0 0 4.311-3.132c.95 1.155 1.895 2.203 2.73 3.334 6.522 8.838 12.955 17.743 19.554 26.524 4.896 6.514 10.669 8.008 16.357 4.524 5.99-3.668 8.197-10.631 4.754-17.428-2.307-4.554-5.586-8.632-8.568-12.824-4.51-6.34-9.14-12.594-14.027-19.307l17.783-13.096c6.851 9.345 13.511 18.438 20.184 27.521.985 1.341 1.961 2.698 3.055 3.948 4.284 4.896 9.274 6.175 14.218 3.71 5.227-2.605 8.473-8.413 7.04-14.092-.871-3.445-2.593-6.855-4.637-9.791-6.173-8.866-12.69-17.493-19.21-26.401l17.757-13.004 40.818 55.69-17.671 13.007-6.575-8.66c.203 10.735-4.389 18.323-12.498 23.798-8.51 5.744-17.335 5.929-26.604.522 2.193 11.648-1.85 20.38-10.834 26.943-10.932 7.988-23.715 7-32.549-3.725-10.026-12.175-19.02-25.2-28.715-38.196 4.574-3.4 8.79-6.53 13.327-9.865zM943.515 791.06a599.56 599.56 0 0 1-5.39 6.744l-8.47-6.194c2.423 8.717 1.576 16.253-3.108 23.489-6.757 9.637-15.439 13.856-27.355 11.026 5.068 10.177 4.277 19.53-2.2 28.367-7.955 10.855-20.43 14.326-31.631 7.051-13.623-8.848-26.357-19.066-39.651-28.822l13.316-17.742c9.76 7.305 19.162 14.384 28.61 21.4 7.876 5.848 13.998 5.72 18.834-.29 4.626-5.748 3.605-13.91-3.197-19.447-8.644-7.037-17.732-13.528-26.622-20.262-.656-.497-1.262-1.06-2.203-1.857l13.107-17.605c7.72 5.768 15.377 11.493 23.038 17.213 2.667 1.99 5.273 4.072 8.03 5.932 5.271 3.555 10.082 3.559 14.3.193 4.513-3.6 6.466-10.076 3.719-15.26-1.73-3.262-4.411-6.293-7.318-8.607-8.564-6.819-17.453-13.229-26.353-19.901l13.232-17.627 55.135 41.411c-2.65 3.641-5.148 7.072-7.823 10.789zM946.432 731.587c5.601.6 9.413-2.087 11.06-6.478 2.126-5.668 3.167-11.758 4.473-17.71.376-1.718.058-3.588.058-5.524h15.74c-.126 16.018-2.28 31.112-12.827 43.637-6.481 7.695-15.149 10.878-24.669 7.194-14.977-5.796-29.578-12.562-44.537-19.003l8.613-19.695 6.89 2.58c-4.289-10.084-1.887-19.016 3.303-27.316 4.711-7.534 11.754-11.472 20.723-10.033 8.367 1.343 15.722 5.456 17.071 14.43.87 5.79-.47 12.162-1.958 17.982-1.38 5.401-4.072 10.515-6.571 15.564-1.463 2.954-.438 3.866 2.631 4.372m-15.859-6.527c2.542-5.172 5.33-10.241 7.539-15.551 1.515-3.644.393-6.888-3.468-8.701-3.827-1.798-7.126-1.055-9.792 2.209-6.238 7.635-3.916 17.74 5.721 22.043z"
    />
    <path
      d="M681.172 921.214c1.516-.722 3.02-1.457 4.394-2.383 11.808-7.949 24.348-12.55 38.523-7.283 12.999 4.83 22.426 19.774 22.526 34.806.09 13.62-8.692 25.749-22.855 31.564-21.753 8.932-41.117-.977-47.756-24.656l43.958-18.581c-7.863-11.764-22.042-8.737-32.415 7.027l-15.55-6.131c3.484-4.903 6.609-9.3 9.52-14.008-.214-.31-.417-.458-.345-.355m24.838 32.285-5.87 2.627c3.892 7.916 10.015 10.677 17.025 7.855 7.224-2.908 10.33-9.865 7.833-18.397a2505.995 2505.995 0 0 0-18.988 7.915z"
    />
    <path
      d="M857.066 276.055c22.188-16.196 44.074-32.198 66.34-48.478l13.09 17.853-40.456 29.598c8.001 1.067 14.891 2.481 21.83 2.779 7.687.33 13.59 2.543 17.323 9.805 2.012 3.913 5.107 7.269 8.417 11.85-10.858-1.418-20.69-2.444-30.418-4.092-4.297-.728-6.416.014-8.075 4.357-5.211 13.64-10.934 27.084-16.676 41.138-4.967-6.773-9.84-13.257-14.461-19.917-.599-.863-.245-2.787.268-3.956 3.599-8.198 7.356-16.327 11.34-25.088-5.013-.255-9.464-2.941-14.028.902-3.664 3.085-7.739 5.682-11.908 8.695l-13.003-17.836c3.51-2.574 6.813-4.995 10.417-7.61z"
    />
    <path
      d="M814.389 161.584c13.61 12.03 15.072 22.894 5.135 37.393-7.884 11.504-15.873 22.935-23.96 34.605l-17.609-12.199 3.832-6.319c-10.7 2.34-18.975-1.798-26.196-8.488-8.025-7.436-9.222-18.247-3.384-27.147 5.998-9.145 15.223-12.12 25.657-7.187 6.547 3.095 12.426 7.606 18.594 11.5 1.534.969 3.023 2.008 4.518 3.004 4.232-5.337 4.029-9.84-.661-14.456-5.43-5.345-12.368-7.555-19.576-9.134-1.113-.244-2.249-.39-3.883-.668l3.096-15.466c12.712 2.206 24.214 6.386 34.437 14.562m-28.029 29.562c-2.241-1.39-4.403-2.934-6.743-4.13-3.15-1.609-6.172-1.174-8.487 1.62-2.45 2.957-3.073 6.26-.68 9.557 5.809 8.001 20.127 9.833 23.633-1.645-2.318-1.611-4.732-3.29-7.723-5.402z"
    />
    <path
      d="M882.962 241.89c-5.993-1.305-11.976-2.55-17.815-3.765-.798-12.225-7.118-19.628-15.828-19.016-9.51.67-18.923 11.142-18.33 20.395.537 8.362 8.555 13.906 19.788 13.365l4.845 17.25c-5.997 2.34-11.618 1.87-17.234.063-22.289-7.17-34.156-30.81-24.943-49.65 8.091-16.547 25.683-25.38 41.482-20.828 18.218 5.248 30.03 22.675 27.96 41.77-.037.458.084.477.075.417zM722.233 121.261a711.008 711.008 0 0 1 3.015-5.62l8.402 3.975c1.444-2.79 2.875-5.515 4.268-8.26 1.42-2.796 2.8-5.612 4.389-8.8l19.623 9.678-8.269 17.093 16.03 8.14-6.337 12.945-16.306-7.885c-4.273 8.737-8.64 17.277-12.626 25.992-1.779 3.89.047 6.862 3.985 8.214 2.322.797 4.816 1.094 7.734 1.724l-2.853 15.496c-9.485.192-17.766-2.32-24.822-8.136-7.741-6.38-9.422-15.36-4.793-25.234 4.29-9.153 8.884-18.163 13.578-27.713l-8.403-4.487c1.11-2.336 2.168-4.559 3.385-7.122z"
    />
    <path
      d="M999.5 563.436c14.18 12.684 14.072 31.565-.28 44.437l7.385 1.54-2.456 21.54-56.958-6.45c-2.316-.262-4.654-.397-6.943-.807-14.374-2.574-24.007-12.27-25.903-27.172-1.997-15.694 1.841-30.027 12.272-42.917l13.001 8.482c-2.66 6.262-6.053 11.938-7.484 18.072-3.444 14.772 2.335 21.618 17.906 22.073-8.15-10.346-8.303-21.352-2.102-32.158 7.293-12.71 20.402-15.73 34.33-13.424 5.854.97 11.317 4.295 17.232 6.784m-7.953 21.81c-.634-.971-1.158-2.04-1.918-2.897-8.206-9.263-25.488-7.388-29.517 3.174-2.305 6.043-.645 12.127 4.391 16.089 5.899 4.64 16.023 5.283 22.076 1.4 5.68-3.643 7.482-9.425 4.968-17.767z"
    />
    <path
      d="M948.678 425.087c-26.405 3.05-41.043-25.13-31.11-42.887l-31.475 12.347-8.224-20.528 87.322-34.67 8.16 20.392-7.766 3.578c20.02 6.584 27.373 37.968 5.026 53.16-6.225 4.233-14.268 5.791-21.933 8.608m-3.245-22.163c4.821-1.982 10.387-3.023 14.311-6.136 8.702-6.901 6.487-20.288-3.51-24.568-5.78-2.474-11.36-1.313-16.776 1.378-7.08 3.517-11.038 9.91-9.99 16.199 1.319 7.923 6.243 12.198 15.965 13.127zM941.012 522.709c-2.007-12.206-.89-23.482 6.828-33.072 9.895-12.296 23.308-15.024 37.837-11.427 14.052 3.478 21.451 13.854 24.232 27.6 2.249 11.112 1.429 21.963-5.037 31.68-8.742 13.137-21.853 16.39-36.366 14.227-13.614-2.03-21.954-10.926-26.264-23.75-.526-1.566-.794-3.219-1.23-5.258M979.81 499.4c-4.549.586-9.467.265-13.573 1.938-9.973 4.065-12.02 17.269-4.213 24.366 5.308 4.826 11.73 5.21 18.28 3.778 8.144-1.78 12.893-7.49 12.911-14.864.02-7.774-4.099-12.666-13.405-15.218z"
    />
    <path
      d="M933.288 460.268c-1.882-7.138-3.489-13.92-5.19-21.097l67.478-15.098 4.834 21.467-10.711 2.725c8.855 3.876 14.524 9.692 16.426 19.14l-18.837 4.195c-.788-2.46-1.395-4.654-2.188-6.779-3.516-9.427-10.555-13.224-20.416-11.058-10.376 2.279-20.748 4.574-31.396 6.505z"
    />
    <path
      d="M436.74 948.702c.767-1.519 1.36-2.708 1.951-3.896 5.164-10.368 5.165-10.372 16.447-8.573 3.771.6 7.538 1.226 11.76 1.914l7.363 61.82.821.398 25.151-57.458c7.296 1.064 14.368 2.015 21.396 3.222.899.155 2.094 1.554 2.267 2.533 5.267 29.943 10.424 59.905 15.726 90.607l-24.029-3.398-7.886-67.847-26.593 62.778-21.977-3.175-7.723-66.026-.97-.114-25.89 61.014-23.078-3.273c11.877-23.76 23.482-46.978 35.264-70.526zM238.831 806.216c5.94 6.759 11.97 13.443 17.996 20.132 4.562 5.064 9.117 10.135 14.135 15.712l-67.234 60.435c-11.115-13.459-23.413-26.031-32.913-40.447-11.633-17.652-7.09-39.37 8.733-53.753 16.121-14.654 37.222-16.278 54.96-4.221 1.238.84 2.422 1.76 3.958 2.452.327-.19.455-.384.365-.31m-43.857 58.317 7.552 8.405 39.528-35.545c-19.356-26.124-32.616-23.39-46.062-12.623-11.569 9.264-14.99 26.302-1.018 39.763z"
    />
    <path
      d="M137.799 747.904c5.615-5.067 11.022-9.837 16.869-14.995l25.246 42.208c10.515-9.707 5.261-24.221-11.393-30.889l3.637-15.812c3.377 1.279 6.388 2.115 9.12 3.502 18.599 9.438 27.911 33.488 19.766 50.771-11.489 24.377-44.812 27.77-60.719 6.184-10.346-14.041-11.253-27.54-2.526-40.97m21.69 35.21 11.017-.504-14.558-24.292c-5.046 3.226-7.715 7.198-7.092 12.773.676 6.05 4.145 9.962 10.632 12.023z"
    />
    <path
      d="M171.018 481.883c-1.51.636-3.234 2.208-4.487 1.894-29.134-7.288-58.217-14.781-87.794-22.36l5.426-21.353 8.323 1.859c-7.557-12.222-5.919-23.75 1.887-34.33 8.099-10.976 19.868-13.288 32.634-11.26 8.67 1.379 16.51 4.783 22.942 11.125 12.631 12.454 10.958 37.896-7.292 47.421l32.451 8.399c-1.507 6.058-2.974 11.956-4.321 18.25.12.397.236.414.231.355m-63.026-38.378c5.191 4.498 11.267 6.28 18.012 5.492 5.698-.666 9.955-3.58 12.022-9.096 1.938-5.173 1.515-10.084-2.098-14.515-4.062-4.98-9.513-7.056-15.708-7.434-6.684-.408-12.14 1.855-15.282 8.07-3.115 6.164-2.155 11.884 3.054 17.483z"
    />
    <path
      d="M152.13 326.525c5.398 1.84 10.385 3.545 15.685 5.356-3.702 7.999-7.049 15.222-10.387 22.45-3.318 7.184-6.629 14.374-9.984 21.651 13.886 3.283 22.284-8.616 19.199-27.021l14.726-5.474c3.511 8.082 3.753 15.837 1.558 23.487-4.308 15.019-12.107 27.132-28.764 30.524-26.183 5.332-49.097-20.214-40.687-45.46 4.054-12.17 10.773-22.37 24.38-25.274 4.446-.95 9.234-.296 14.275-.239m-20.894 40.639 4.95 4.723 11.592-25.132c-7.195-2.803-11.843-2.01-15.797 2.438-4.512 5.074-4.864 10.497-.745 17.97z"
    />
    <path
      d="M497.68 146.867c-8.223.797-15.993 1.553-24.208 2.353l-9.317-89.09 22.617-2.477 7.388 70.273 37.78-3.838 2.103 18.824c-12.148 1.324-24.03 2.62-36.363 3.955zM691.569 117.403c2.762 2.18 5.452 3.928 7.68 6.14 7.054 7.001 9.737 15.29 6.752 25.062-3.024 9.902-9.79 15.667-19.834 17.396-16.416 2.827-30.384-3.263-43.216-12.682-5.491-4.03-10.6-8.581-16.05-13.031l15.93-15.268c6.058 8.465 13.46 16.03 23.525 20.435 2.552 1.117 5.508 2.425 8.076 2.09 2.754-.357 6.34-1.944 7.568-4.12 1.074-1.905.108-5.834-1.285-8.025-1.605-2.525-4.582-4.238-7.112-6.102-5.482-4.042-11.179-7.801-16.568-11.96-7.877-6.077-10.756-14.032-8.357-23.845 2.484-10.159 9.184-16 19.007-18.276 17.107-3.963 43.934 7.11 53.947 22.238l-12.776 13.584c-5.205-4.124-10.038-8.414-15.347-11.996-3.517-2.373-7.623-3.987-11.64-5.466-3.264-1.202-6.7-1.124-8.803 2.408-2.224 3.734-.584 6.992 2.235 9.298 5.135 4.202 10.635 7.957 16.268 12.12zM279.954 242.948c-.98-.476-2.324-.615-2.876-1.35-17.704-23.547-35.332-47.152-53.2-71.054l53.15-39.888 10.765 14.293-34.94 26.282 12.454 16.612 32.174-24.092 10.777 14.259-32.152 24.215 19.785 26.415c-4.639 3.492-9.266 6.883-13.768 10.431-1.054.831-1.688 2.196-2.398 3.622.116.306.235.314.229.255zM386.17 128.265c4.491 9.356 8.38 18.6 5.77 28.892-1.12 4.411-3.36 8.538-5.227 13.12-10.8 12.911-24.2 20.11-40.861 20.014-12.193-.072-22.334-5.499-28.135-16.058-9.406-17.119-17.627-34.889-26.487-52.662l20.673-10.03c4.75 9.795 9.438 19.456 14.12 29.12 3.037 6.27 5.88 12.641 9.137 18.795 4.917 9.29 14.019 12.826 23.07 9.286 10.686-4.179 14.89-13.969 10.093-24.806-4.63-10.46-9.836-20.667-14.787-30.986-2.722-5.672-5.44-11.345-8.354-17.42l20.313-9.874c6.919 14.284 13.706 28.299 20.675 42.609zM322.788 953.93c-5.236 7.767-10.434 15.599-15.635 23.427-.725 1.09-1.473 2.164-2.365 3.473l-18.504-11.77 18.546-29.41c-9.096 2.506-16.654 1.058-23.559-3.779-11.045-7.737-15.799-18.251-13.263-31.555 2.21-11.597 8.356-20.955 18.036-27.724 17.242-12.057 42.709-1.671 46.528 19.258l4.802-7.005 18.554 11.792c-11.165 17.61-22.25 35.093-33.288 52.943.047.366.186.413.148.35m-6.64-58.73c-7.34-4.148-13.365-3.722-19.239 1.359-6.699 5.794-9.52 15.053-6.682 21.932 2.096 5.083 7.818 8.922 13.336 8.948 7.081.033 13.788-5.151 17.11-13.225 2.954-7.183 1.72-12.98-4.525-19.014zM143.899 656.877c-7.204 6.09-15.172 10.431-24.84 11.186-20.148 1.574-35.23-10.488-38-30.511-3.135-22.68 9.508-38.08 33.664-40.451l9.77 46.92c5.308-1.941 8.452-5.728 9.33-10.802 1.607-9.297-2.468-16.45-10.105-22.222l8.47-13.297c17.52 8.228 26.716 41.474 11.584 58.844.017.357.149.398.127.333m-44.826-32.192c-3.945 5.805-4.083 11.395-.407 16.524 3.272 4.566 8.718 6.553 14.19 5.143l-5.648-26.86c-2.983 1.816-5.307 3.23-8.135 5.193z"
    />
    <path
      d="M403.838 974.794c-1.239.598-2.488 1.185-3.57 1.996-17.87 13.407-48.337 4.429-55.564-16.453-3.804-10.993-.92-21.225 3.8-31.497 7.574 3.076 14.938 6.082 22.315 9.057 7.343 2.96 14.7 5.888 22.08 8.843 3.446-12.517-10.95-23.727-27.612-17.528l-6.343-14.229c13.264-9.012 38.056-1.761 48.473 10.594 11.39 13.508 9.842 33.07-3.859 48.847.162.326.347.463.28.37m-23.685-20.392-16.36-6.486c-2.616 8.872-.19 14.78 6.878 17.804 6.982 2.987 13.645.31 18.427-7.59-2.782-1.134-5.524-2.253-8.945-3.728z"
    />
    <path
      d="M126.192 679.285c11.632-.095 22.788-.06 33.935-.347 3.271-.084 5.232.565 6.055 4.035.644 2.72 1.946 5.285 2.96 7.917 3.62 9.403 3.572 9.347-4.07 16.155-15.627 13.923-31.197 27.911-47.207 42.246-2.631-6.658-5.266-12.874-7.431-19.25-.36-1.057.974-3.252 2.124-4.175 11.783-9.452 23.69-18.75 35.396-29.119-8.3.573-16.603 1.132-24.903 1.722-6.97.496-13.932 1.16-20.91 1.434-1.403.055-3.657-.946-4.162-2.07-2.567-5.712-4.689-11.624-7.385-18.54 12.235 0 23.677 0 35.598-.008zM633.984 986.049c11.914-5.01 15.046-11.317 11.919-23.397-2.499-9.651-5.022-19.296-7.694-29.554l21.433-5.605 17.318 66.892-21.328 5.517-3.04-10.626c-3.517 8.983-9.192 14.845-18.561 17.066l-4.93-18.745c1.528-.496 3.019-.98 4.883-1.548zM177.793 300.144c1.267 1.484 2.427 3.198 4.02 4.27 8.952 6.023 18.008 11.89 27.159 17.897l-12.164 18.472-57.718-37.767 12.067-18.468 9.362 5.905c-3.41-9.198-3.128-17.263 2.24-25.171l16.393 10.702c-5.44 8.061-8.499 15.99-1.749 24.427.344-.153.484-.334.39-.267zM998.809 650.286c-1.548 7.053-3.323 13.768-5.209 20.904l-10.75-2.547c6.062 7.623 8.105 15.409 5.611 24.557l-18.482-5c.432-3.784 1.143-7.186 1.144-10.59.003-8.01-4.319-13.47-12.07-15.62-10.537-2.92-21.097-5.757-32.151-8.766l5.796-21.499c22.173 6.133 44.03 12.178 66.111 18.56z"
    />
    <path
      d="M133.801 489.175c6.968 9.397 10.15 19.777 9.224 31.578-1.21 15.429-9.921 27.966-23.19 32.486-13.729 4.678-29.532.448-38.889-9.655-13.917-15.026-12.566-55.803 17.4-62.884 12.742-3.011 24.828-.819 35.086 8.647.342-.072.445-.224.37-.172m-23.587 43.68c1.635-.304 3.33-.422 4.893-.943 6.02-2.005 9.901-6.036 10.728-12.456.825-6.395-1.596-11.544-7.183-14.726-6.607-3.764-13.618-4.093-20.539-.777-5.27 2.526-7.866 7.04-8.115 12.783-.243 5.626 2.134 10.376 7.03 12.85 3.72 1.88 8.191 2.275 13.186 3.268z"
    />
    <path
      d="M143.08 577.568c.042.599.002.769.045 1.187.112 1.975.142 3.702-.009 5.825-25.882 2.23-51.585 4.062-77.287 5.893-5.456.389-10.912.772-17.036 1.205-.305-3.977-.605-7.9-1.039-12.252-.154-1.062-.175-1.693-.63-2.548-.433-.224-.817-.41-.817-.41l1.46-6.879 94.003-6.902c.42 4.95.824 9.7 1.31 14.88z"
    />
    <path
      d="M600.527 102.367c-.172 4.46-.593 8.572-1.072 13.247l-33.622-3.108 1.368-13.978c11.138 1.176 22.108 2.334 33.326 3.839z"
    />
    <path
      d="M582.408 963.055c-7.928.807-12.48-2.023-13.443-8.033-1.03-6.425 2.125-11.34 8.146-12.69 5.402-1.21 10.334 1.517 12.2 6.748 2.186 6.126-.016 10.845-6.903 13.975zM233.934 258.703c6.385-2.539 11.003-1.375 14.287 3.307 2.797 3.988 2.536 9.067-.662 12.848-4.135 4.891-10.11 5.424-14.94 1.333-4.906-4.155-5.524-9.984-1.52-14.897.722-.886 1.667-1.591 2.835-2.591z"
    />
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

