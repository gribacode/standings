export const IconPack: Component.IconPack = ({ name, className, fillColor, strokeColor }) => {
  const colorForFill = fillColor ? fillColor : "#FFAA00";
  const colorForStroke = strokeColor ? strokeColor : "#1E1E1E";

  const iconsAppearance = {
    soccerBall: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_143)">
          <path
            d="M32 0C14.356 0 0 14.356 0 32C0 49.644 14.356 64 32 64C49.644 64 64 49.644 64 32C64 14.356 49.644 0 32 0ZM34.032 10.396L42.26 5.972C46.816 7.776 50.792 10.732 53.816 14.492L51.856 23.54L45.58 26.616L34.032 18.204V10.396ZM21.808 5.948L30.036 10.388V18.204L18.496 26.616L12.188 23.536L10.228 14.432C13.26 10.68 17.244 7.74 21.808 5.948ZM8.92 47.816C6.308 44.016 4.608 39.548 4.14 34.72L10.912 27.364L17.088 30.384L21.74 43.596L17.808 48.308L8.92 47.816ZM39.132 59.044C36.848 59.648 34.468 60 32 60C29.016 60 26.144 59.52 23.444 58.652L20.928 50.82L24.94 46H39.076L43.016 50.664L39.132 59.044ZM46.136 48.172L42.268 43.592L46.984 30.384L53.132 27.372L59.864 34.724C59.46 38.888 58.12 42.772 56.084 46.208L46.136 48.172Z"
            fill={colorForFill}
          />
        </g>
        <defs>
          <clipPath id="clip0_1_143">
            <rect width="64" height="64" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    instagram: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.0002 11.6756C17.1935 11.6756 11.6758 17.1934 11.6758 24C11.6758 30.8064 17.1935 36.3242 24.0002 36.3242C30.8066 36.3242 36.3243 30.8064 36.3243 24C36.3243 17.1934 30.8066 11.6756 24.0002 11.6756ZM24.0002 31.9999C19.5818 31.9999 16.0001 28.4182 16.0001 24C16.0001 19.5817 19.5818 15.9999 24.0002 15.9999C28.4183 15.9999 32 19.5817 32 24C32 28.4182 28.4183 31.9999 24.0002 31.9999Z"
          fill={colorForFill}
        />
        <path
          d="M36.8112 14.0687C38.4017 14.0687 39.6912 12.7793 39.6912 11.1887C39.6912 9.59812 38.4017 8.30878 36.8112 8.30878C35.2206 8.30878 33.9312 9.59812 33.9312 11.1887C33.9312 12.7793 35.2206 14.0687 36.8112 14.0687Z"
          fill={colorForFill}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 0C17.4819 0 16.6646 0.0276562 14.1048 0.144469C11.5503 0.261 9.80559 0.666656 8.27897 1.26C6.70078 1.87331 5.36231 2.694 4.02816 4.02825C2.69391 5.36241 1.87322 6.70087 1.25991 8.27906C0.666562 9.80559 0.260906 11.5503 0.144375 14.1048C0.0275625 16.6646 0 17.4819 0 24C0 30.5179 0.0275625 31.3352 0.144375 33.895C0.260906 36.4495 0.666562 38.1942 1.25991 39.7207C1.87322 41.2989 2.69391 42.6374 4.02816 43.9717C5.36231 45.3059 6.70078 46.1266 8.27897 46.7399C9.80559 47.3332 11.5503 47.7389 14.1048 47.8554C16.6646 47.9722 17.4819 47.9998 24 47.9998C30.5179 47.9998 31.3352 47.9722 33.895 47.8554C36.4495 47.7389 38.1942 47.3332 39.7207 46.7399C41.2989 46.1266 42.6374 45.3059 43.9717 43.9717C45.3059 42.6374 46.1266 41.2989 46.7399 39.7207C47.3332 38.1942 47.7389 36.4495 47.8554 33.895C47.9722 31.3352 47.9998 30.5179 47.9998 24C47.9998 17.4819 47.9722 16.6646 47.8554 14.1048C47.7389 11.5503 47.3332 9.80559 46.7399 8.27906C46.1266 6.70087 45.3059 5.36241 43.9717 4.02825C42.6374 2.694 41.2989 1.87331 39.7207 1.26C38.1942 0.666656 36.4495 0.261 33.895 0.144469C31.3352 0.0276562 30.5179 0 24 0ZM24 4.32441C30.4082 4.32441 31.1673 4.34878 33.698 4.46428C36.0379 4.57106 37.3087 4.962 38.1544 5.29059C39.2746 5.72597 40.0741 6.24609 40.9139 7.08591C41.7538 7.92572 42.2738 8.72531 42.7092 9.84544C43.0379 10.6912 43.4288 11.9619 43.5356 14.3018C43.651 16.8326 43.6755 17.5917 43.6755 24C43.6755 30.4082 43.651 31.1673 43.5356 33.698C43.4288 36.0379 43.0379 37.3087 42.7092 38.1544C42.2738 39.2746 41.7538 40.0741 40.9139 40.9139C40.0741 41.7538 39.2746 42.2738 38.1544 42.7092C37.3087 43.0379 36.0379 43.4288 33.698 43.5355C31.1677 43.651 30.4087 43.6755 24 43.6755C17.5912 43.6755 16.8323 43.651 14.3018 43.5355C11.9619 43.4288 10.6912 43.0379 9.84544 42.7092C8.72522 42.2738 7.92572 41.7538 7.08581 40.9139C6.246 40.0741 5.72587 39.2746 5.29059 38.1544C4.96191 37.3087 4.57097 36.0379 4.46419 33.698C4.34869 31.1673 4.32431 30.4082 4.32431 24C4.32431 17.5917 4.34869 16.8326 4.46419 14.3018C4.57097 11.9619 4.96191 10.6912 5.29059 9.84544C5.72587 8.72531 6.246 7.92572 7.08581 7.08591C7.92572 6.24609 8.72522 5.72597 9.84544 5.29059C10.6912 4.962 11.9619 4.57106 14.3018 4.46428C16.8326 4.34878 17.5917 4.32441 24 4.32441Z"
          fill={colorForFill}
        />
      </svg>
    ),
    youtube: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2_137)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M45.4933 9.66825C46.238 10.4178 46.7728 11.3498 47.0442 12.3709C48.0479 16.14 48.0479 24 48.0479 24C48.0479 24 48.0479 31.86 47.0442 35.6291C46.7728 36.6503 46.238 37.5823 45.4933 38.3318C44.7485 39.0813 43.82 39.6221 42.8006 39.9C39.0479 40.9091 24.0479 40.9091 24.0479 40.9091C24.0479 40.9091 9.04785 40.9091 5.29512 39.9C4.27571 39.6221 3.34717 39.0813 2.60243 38.3318C1.85768 37.5823 1.32286 36.6503 1.05149 35.6291C0.0478516 31.86 0.0478516 24 0.0478516 24C0.0478516 24 0.0478516 16.14 1.05149 12.3709C1.32286 11.3498 1.85768 10.4178 2.60243 9.66825C3.34717 8.91872 4.27571 8.37794 5.29512 8.10003C9.04785 7.09094 24.0479 7.09094 24.0479 7.09094C24.0479 7.09094 39.0479 7.09094 42.8006 8.10003C43.82 8.37794 44.7485 8.91872 45.4933 9.66825ZM31.6841 24.0001L19.1387 16.8628V31.1373L31.6841 24.0001Z"
            fill={colorForFill}
          />
        </g>
        <defs>
          <clipPath id="clip0_2_137">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    twitter: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.095 43.0025C33.2083 43.0025 43.1155 27.9958 43.1155 14.982C43.1155 14.5558 43.1155 14.1315 43.0867 13.7091C45.0141 12.315 46.6778 10.5888 48 8.61146C46.2028 9.40826 44.2961 9.93057 42.3437 10.1609C44.3996 8.93027 45.9383 6.99446 46.6733 4.71386C44.7402 5.86107 42.6253 6.66951 40.4198 7.10426C38.935 5.52541 36.9712 4.47994 34.8324 4.12963C32.6935 3.77931 30.4988 4.14369 28.5879 5.16636C26.677 6.18904 25.1564 7.813 24.2615 9.78695C23.3665 11.7609 23.1471 13.9748 23.6371 16.086C19.7218 15.8896 15.8915 14.8721 12.3949 13.0995C8.89831 11.3269 5.81353 8.83878 3.3408 5.79674C2.08146 7.96473 1.69574 10.5312 2.2622 12.9736C2.82865 15.416 4.30468 17.5506 6.38976 18.943C4.82246 18.8971 3.2893 18.4742 1.92 17.7103V17.8351C1.92062 20.1088 2.7077 22.3123 4.14774 24.0719C5.58778 25.8314 7.59212 27.0387 9.8208 27.4889C8.37096 27.8844 6.84975 27.9422 5.37408 27.6579C6.00363 29.6145 7.22886 31.3255 8.87848 32.5517C10.5281 33.7779 12.5197 34.458 14.5747 34.4969C12.5329 36.1018 10.1946 37.2885 7.69375 37.9889C5.19287 38.6893 2.57843 38.8898 0 38.5788C4.50367 41.4688 9.74385 43.0018 15.095 42.9948"
          fill={colorForFill}
        />
      </svg>
    ),
    google: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_2_147)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.8757 13.0969C31.3477 10.7336 27.9741 9.44608 24.4835 9.49899C18.0961 9.49899 12.6714 13.723 10.7371 19.4108V19.4109C9.71155 22.3915 9.71154 25.619 10.7371 28.5996H10.7461C12.6893 34.2786 18.1051 38.5026 24.4925 38.5026C27.7897 38.5026 30.6203 37.6759 32.8142 36.2158V36.2099C35.3961 34.5344 37.1594 31.8977 37.7082 28.9171H24.4835V19.6755H47.5772C47.8651 21.2804 48 22.9206 48 24.552C48 31.8515 45.3387 38.0228 40.7081 42.2027L40.7129 42.2063C36.6556 45.8748 31.0868 48 24.4835 48C15.2263 48 6.76072 42.8853 2.60441 34.7813V34.7812C-0.868146 27.9999 -0.868138 20.0105 2.60444 13.2292H2.60449L2.60441 13.2292C6.76072 5.11627 15.2263 0.00161728 24.4835 0.00161728C30.565 -0.0689296 36.4396 2.17094 40.8658 6.24502L33.8757 13.0969Z"
            fill={colorForFill}
          />
        </g>
        <defs>
          <clipPath id="clip0_2_147">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    sun: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M32 6V12M32 52V58M50.385 13.615L46.1425 17.8575M17.8575 46.1425L13.615 50.385M58 32H52M12 32H6M50.385 50.385L46.1425 46.1425M17.8575 17.8575L13.615 13.615"
          stroke={colorForStroke}
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
        <path
          d="M32 42C37.5228 42 42 37.5228 42 32C42 26.4772 37.5228 22 32 22C26.4772 22 22 26.4772 22 32C22 37.5228 26.4772 42 32 42Z"
          stroke={colorForStroke}
          strokeWidth="3"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
    ),
    moon: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 17C20 13.1725 20.5638 9.29875 22 6C12.4462 10.1588 6 19.915 6 31C6 45.9113 18.0887 58 33 58C44.085 58 53.8412 51.5538 58 42C54.7013 43.4362 50.8275 44 47 44C32.0887 44 20 31.9113 20 17Z"
          stroke={colorForStroke}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    brazilFlag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_302_760)">
          <rect width="22" height="16" rx="2" fill="#249F58" />
          <path fillRule="evenodd" clipRule="evenodd" d="M11 2.13333L18.8571 8L11 13.8667L3.14282 8" fill="#FFDA2C" />
          <path
            d="M11 11.7333C13.0251 11.7333 14.6667 10.0619 14.6667 8C14.6667 5.93813 13.0251 4.26666 11 4.26666C8.975 4.26666 7.33337 5.93813 7.33337 8C7.33337 10.0619 8.975 11.7333 11 11.7333Z"
            fill="#1A47B8"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.42859 9.60001V10.6667H10.4762V9.60001H9.42859ZM11.5238 9.60001V10.6667H12.5714V9.60001H11.5238Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.38098 6.39999C8.38098 6.39999 10.7528 6.82666 12.4625 7.57119L14.6667 8.53333"
            fill="white"
          />
          <path d="M8.38098 6.39999C8.38098 6.39999 10.7528 6.82666 12.4625 7.57119L14.6667 8.53333" stroke="white" />
        </g>
        <defs>
          <clipPath id="clip0_302_760">
            <rect width="22" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    chileFlag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_302_749)">
          <g clipPath="url(#clip1_302_749)">
            <rect width="22" height="16" rx="2" fill="white" />
            <path
              d="M19.9048 0H2.09524C0.93807 0 0 0.955126 0 2.13333V13.8667C0 15.0449 0.93807 16 2.09524 16H19.9048C21.0619 16 22 15.0449 22 13.8667V2.13333C22 0.955126 21.0619 0 19.9048 0Z"
              fill="white"
            />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H9V8H0V0Z" fill="#1A47B8" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.49124 5.57553L2.95124 6.40006L3.24457 4.655L2 3.41766L3.72124 3.1638L4.49124 1.57446L5.26124 3.1638L6.98248 3.4198L5.73581 4.655L6.03124 6.40006"
              fill="white"
            />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 8H22V16H0V8Z" fill="#F93939" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_302_749">
            <rect width="22" height="16" fill="white" />
          </clipPath>
          <clipPath id="clip1_302_749">
            <rect width="22" height="16" rx="2" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    colombiaFlag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_302_747)">
          <g clipPath="url(#clip1_302_747)">
            <path
              d="M19.9048 0H2.09524C0.93807 0 0 0.955126 0 2.13333V13.8667C0 15.0449 0.93807 16 2.09524 16H19.9048C21.0619 16 22 15.0449 22 13.8667V2.13333C22 0.955126 21.0619 0 19.9048 0Z"
              fill="#1A47B8"
            />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H22V8H0V0Z" fill="#FFDA2C" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 12H22V16H0V12Z" fill="#F93939" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_302_747">
            <rect width="22" height="16" fill="white" />
          </clipPath>
          <clipPath id="clip1_302_747">
            <rect width="22" height="16" rx="2" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    uruguayFlag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_302_594)">
          <rect width="22" height="16" rx="2" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.4762 3.20001H22V5.33335H10.4762V3.20001ZM10.4762 7.46668H22V9.60001H10.4762V7.46668ZM0 11.7333H22V13.8667H0V11.7333Z"
            fill="#3A99FF"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.2076 7.33867C6.96664 8.66667 6.41141 9.6 5.76188 9.6C5.11236 9.6 4.55712 8.66773 4.31617 7.33867C3.01188 7.09333 2.09521 6.528 2.09521 5.86666C2.09521 5.20533 3.01083 4.64 4.31617 4.39466C4.55712 3.06666 5.11236 2.13333 5.76188 2.13333C6.41141 2.13333 6.96664 3.0656 7.2076 4.39466C8.51188 4.64 9.42855 5.20533 9.42855 5.86666C9.42855 6.528 8.51293 7.09333 7.2076 7.33867Z"
            fill="#D4AF2C"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.4816 6.59946C6.41455 8.30933 6.11807 9.6 5.76188 9.6C5.40569 9.6 5.10922 8.30933 5.04217 6.59946C3.36283 6.5312 2.09521 6.22933 2.09521 5.86666C2.09521 5.504 3.36283 5.20213 5.04217 5.13387C5.10922 3.424 5.40569 2.13333 5.76188 2.13333C6.11807 2.13333 6.41455 3.424 6.4816 5.13387C8.16093 5.20213 9.42855 5.504 9.42855 5.86666C9.42855 6.22933 8.16093 6.5312 6.4816 6.59946V6.59946Z"
            fill="#FFDA2C"
          />
          <path
            d="M5.76186 7.46666C6.62973 7.46666 7.33329 6.75032 7.33329 5.86666C7.33329 4.98301 6.62973 4.26666 5.76186 4.26666C4.89398 4.26666 4.19043 4.98301 4.19043 5.86666C4.19043 6.75032 4.89398 7.46666 5.76186 7.46666Z"
            fill="#FFDA2C"
          />
        </g>
        <defs>
          <clipPath id="clip0_302_594">
            <rect width="22" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    franceFlag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_302_723)">
          <g clipPath="url(#clip1_302_723)">
            <rect width="22" height="16" rx="2" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H7V16H0V0Z" fill="#1A47B8" />
            <path fillRule="evenodd" clipRule="evenodd" d="M15 0H22V16H15V0Z" fill="#F93939" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_302_723">
            <rect width="22" height="16" fill="white" />
          </clipPath>
          <clipPath id="clip1_302_723">
            <rect width="22" height="16" rx="2" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    nigeriaFlag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_302_656)">
          <g clipPath="url(#clip1_302_656)">
            <rect width="22" height="16" rx="2" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 11H22V16H0V11Z" fill="#00B731" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H22V5H0V0Z" fill="#FF6C2D" />
            <path
              d="M11 9.59999C11.8679 9.59999 12.5714 8.88365 12.5714 7.99999C12.5714 7.11634 11.8679 6.39999 11 6.39999C10.1321 6.39999 9.42859 7.11634 9.42859 7.99999C9.42859 8.88365 10.1321 9.59999 11 9.59999Z"
              fill="#FF6C2D"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_302_656">
            <rect width="22" height="16" fill="white" />
          </clipPath>
          <clipPath id="clip1_302_656">
            <rect width="22" height="16" rx="2" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    germanyFlag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_302_719)">
          <g clipPath="url(#clip1_302_719)">
            <rect width="22" height="16" rx="2" fill="#F93939" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 11H23V16H0V11Z" fill="#FFDA2C" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H23V5H0V0Z" fill="#151515" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_302_719">
            <rect width="22" height="16" fill="white" />
          </clipPath>
          <clipPath id="clip1_302_719">
            <rect width="22" height="16" rx="2" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    algeriaFlag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_302_786)">
          <g clipPath="url(#clip1_302_786)">
            <rect width="22" height="16" rx="2" fill="white" />
            <path
              d="M19.9048 0H2.09524C0.93807 0 0 0.955126 0 2.13333V13.8667C0 15.0449 0.93807 16 2.09524 16H19.9048C21.0619 16 22 15.0449 22 13.8667V2.13333C22 0.955126 21.0619 0 19.9048 0Z"
              fill="white"
            />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H11V16H0V0Z" fill="#249F58" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.6735 10.9472C12.8123 12.0747 11.4651 12.8 9.95232 12.8C7.34899 12.8 5.23804 10.6507 5.23804 8.00001C5.23804 5.34935 7.34899 3.20001 9.95232 3.20001C11.4651 3.20001 12.8123 3.92535 13.6735 5.05281C13.0082 4.56001 12.1712 4.26668 11.2618 4.26668C9.09328 4.26668 7.33328 5.93815 7.33328 8.00001C7.33328 10.0619 9.09328 11.7333 11.2618 11.7333C12.1712 11.7333 13.0082 11.44 13.6735 10.9472Z"
              fill="#F93939"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.619 7.99999L14.6666 7.46666L15.1904 6.39999L15.7143 7.46666L16.7619 7.99999L15.7143 8.53333L15.1904 9.59999L14.6666 8.53333L13.619 7.99999Z"
              fill="#F93939"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_302_786">
            <rect width="22" height="16" fill="white" />
          </clipPath>
          <clipPath id="clip1_302_786">
            <rect width="22" height="16" rx="2" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    netherlandsFlag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_302_659)">
          <g clipPath="url(#clip1_302_659)">
            <rect width="22" height="16" rx="2" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 11H22V16H0V11Z" fill="#1E448D" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H22V5H0V0Z" fill="#B01923" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_302_659">
            <rect width="22" height="16" fill="white" />
          </clipPath>
          <clipPath id="clip1_302_659">
            <rect width="22" height="16" rx="2" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    mexicoFlag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_302_671)">
          <g clipPath="url(#clip1_302_671)">
            <rect width="22" height="16" rx="2" fill="white" />
            <rect x="16" width="6" height="16" fill="#F93939" />
            <rect width="6" height="16" fill="#249F58" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.9765 8.00053C13.9919 8.10956 13.9999 8.22095 13.9999 8.33354C13.9999 9.80598 12.6565 10.9999 10.9999 10.9999C9.34321 10.9999 7.99988 9.80598 7.99988 8.33354C7.99988 8.22095 8.00788 8.10956 8.02321 7.99994C8.20788 9.02384 9.46988 9.81487 10.9999 9.81487C12.5299 9.81487 13.7919 9.02325 13.9765 7.99994V8.00053Z"
              fill="#249F58"
            />
            <ellipse cx="11" cy="6.93331" rx="1.57143" ry="1.6" fill="#AE6A3E" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_302_671">
            <rect width="22" height="16" fill="white" />
          </clipPath>
          <clipPath id="clip1_302_671">
            <rect width="22" height="16" rx="2" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    costaRicoFlag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_302_744)">
          <rect width="22" height="16" rx="2" fill="#1A47B8" />
          <path fillRule="evenodd" clipRule="evenodd" d="M0 3H22V5H0V3Z" fill="white" />
          <path fillRule="evenodd" clipRule="evenodd" d="M0 5H22V11H0V5Z" fill="#F93939" />
          <path fillRule="evenodd" clipRule="evenodd" d="M0 11H22V13H0V11Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_302_744">
            <rect width="22" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    greeceFlag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_302_717)">
          <rect width="22" height="16" rx="2" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 0H4.19048V4.26667H0V0ZM6.28571 0H10.4762V4.26667H6.28571V0ZM0 6.4H4.19048V10.6667H0V6.4ZM6.28571 6.4H10.4762V10.6667H6.28571V6.4ZM10.4762 0H22V2.13333H10.4762V0ZM10.4762 4.26667H22V6.4H10.4762V4.26667Z"
            fill="#1A47B8"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 8.53333H22V10.6667H0V8.53333ZM4.19048 8.53333H6.28571V10.6667H4.19048V8.53333ZM0 12.8H22V14.9333H0V12.8Z"
            fill="#1A47B8"
          />
        </g>
        <defs>
          <clipPath id="clip0_302_717">
            <rect width="22" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    argentinaFlag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_302_778)">
          <g clipPath="url(#clip1_302_778)">
            <path
              d="M19.9048 0H2.09524C0.93807 0 0 0.955126 0 2.13333V13.8667C0 15.0449 0.93807 16 2.09524 16H19.9048C21.0619 16 22 15.0449 22 13.8667V2.13333C22 0.955126 21.0619 0 19.9048 0Z"
              fill="white"
            />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 11H22V16H0V11ZM0 0H22V5H0V0Z" fill="#3ECBF8" />
            <path
              d="M11 9.60002C11.8679 9.60002 12.5714 8.88368 12.5714 8.00002C12.5714 7.11637 11.8679 6.40002 11 6.40002C10.1321 6.40002 9.42859 7.11637 9.42859 8.00002C9.42859 8.88368 10.1321 9.60002 11 9.60002Z"
              fill="#FFDA2C"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_302_778">
            <rect width="22" height="16" fill="white" />
          </clipPath>
          <clipPath id="clip1_302_778">
            <rect width="22" height="16" rx="2" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    switzerlandFlag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_302_612)">
          <rect width="22" height="16" rx="2" fill="#F93939" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.42862 6.40001H6.28577V9.60001H9.42862V12.8H12.5715V9.60001H15.7143V6.40001H12.5715V3.20001H9.42862V6.40001Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_302_612">
            <rect width="22" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    belgiumFlag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_302_768)">
          <g clipPath="url(#clip1_302_768)">
            <path
              d="M19.9048 0H2.09524C0.93807 0 0 0.955126 0 2.13333V13.8667C0 15.0449 0.93807 16 2.09524 16H19.9048C21.0619 16 22 15.0449 22 13.8667V2.13333C22 0.955126 21.0619 0 19.9048 0Z"
              fill="#FFDA2C"
            />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H7V16H0V0Z" fill="#151515" />
            <path fillRule="evenodd" clipRule="evenodd" d="M15 0H22V16H15V0Z" fill="#F93939" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_302_768">
            <rect width="22" height="16" fill="white" />
          </clipPath>
          <clipPath id="clip1_302_768">
            <rect width="22" height="16" rx="2" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    unitedStatesFlag: (
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_302_595)">
          <g clipPath="url(#clip1_302_595)">
            <rect width="22" height="16" rx="2" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M0 0H9.42857V7.46667H0V0Z" fill="#1A47B8" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.42857 0V1.06667H22V0H9.42857ZM9.42857 2.13333V3.2H22V2.13333H9.42857ZM9.42857 4.26667V5.33333H22V4.26667H9.42857ZM9.42857 6.4V7.46667H22V6.4H9.42857ZM0 8.53333V9.6H22V8.53333H0ZM0 10.6667V11.7333H22V10.6667H0ZM0 12.8V13.8667H22V12.8H0ZM0 14.9333V16H22V14.9333H0Z"
              fill="#F93939"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.04761 1.06665V2.13332H2.09523V1.06665H1.04761ZM3.14285 1.06665V2.13332H4.19046V1.06665H3.14285ZM5.23808 1.06665V2.13332H6.2857V1.06665H5.23808ZM7.33332 1.06665V2.13332H8.38094V1.06665H7.33332ZM6.2857 2.13332V3.19998H7.33332V2.13332H6.2857ZM4.19046 2.13332V3.19998H5.23808V2.13332H4.19046ZM2.09523 2.13332V3.19998H3.14285V2.13332H2.09523ZM1.04761 3.19998V4.26665H2.09523V3.19998H1.04761ZM3.14285 3.19998V4.26665H4.19046V3.19998H3.14285ZM5.23808 3.19998V4.26665H6.2857V3.19998H5.23808ZM7.33332 3.19998V4.26665H8.38094V3.19998H7.33332ZM1.04761 5.33332V6.39998H2.09523V5.33332H1.04761ZM3.14285 5.33332V6.39998H4.19046V5.33332H3.14285ZM5.23808 5.33332V6.39998H6.2857V5.33332H5.23808ZM7.33332 5.33332V6.39998H8.38094V5.33332H7.33332ZM6.2857 4.26665V5.33332H7.33332V4.26665H6.2857ZM4.19046 4.26665V5.33332H5.23808V4.26665H4.19046ZM2.09523 4.26665V5.33332H3.14285V4.26665H2.09523Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_302_595">
            <rect width="22" height="16" fill="white" />
          </clipPath>
          <clipPath id="clip1_302_595">
            <rect width="22" height="16" rx="2" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  };

  return <div>{iconsAppearance[name]}</div>;
};
