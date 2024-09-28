import React from 'react';
import './TodosLoading.css'

// viene en las props, pero se usa destructuracion para obtener directamente lo que se envio en App.js
function TodosLoading(){

    return(
        <div className="spinner">
        <div>T</div>
        <div>O</div>
        <div>D</div>
        <div>O</div>
        <div className="icon-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 50 49"
            height="49"
            width="40"
          >
            <path
              fill="#3EB3C2"
              d="M12.376 0.00166752C13.3938 -0.0161892 14.3938 0.110593 15.3402 0.323088C15.619 0.385826 15.8783 0.515842 16.0954 0.701795C16.3124 0.887749 16.4807 1.12399 16.5855 1.38991C16.6902 1.65583 16.7284 1.94335 16.6965 2.22739C16.6646 2.51143 16.5638 2.78335 16.4027 3.01945C16.3991 3.0248 16.3937 3.03016 16.3937 3.03909C15.983 3.66407 15.2331 3.96764 14.5009 3.80693C13.8581 3.64622 13.1795 3.57479 12.501 3.57479C7.42968 3.57479 3.32264 7.82468 3.5905 12.9495C3.70172 15.0895 4.57963 17.1179 6.06364 18.6637L5.99222 18.7994C7.07605 17.3944 8.46806 16.257 10.0609 15.4749C11.6538 14.6929 13.405 14.2871 15.1795 14.2888C16.9294 14.2888 18.6794 14.6816 20.2508 15.4495L28.7684 19.5922C29.5005 19.9494 30.3398 19.4137 30.3398 18.6101V16.2352C30.3398 14.0031 31.1791 11.9674 32.554 10.4139L39.786 2.36054C40.2324 1.86055 41.0717 2.16411 41.0717 2.84267V7.68183C44.4109 8.44966 47.0358 11.8246 47.7143 15.3066C47.8036 15.753 48.1965 16.0745 48.6429 16.0745C49.0028 16.0745 49.348 16.2174 49.6025 16.472C49.857 16.7265 50 17.0716 50 17.4316V17.8244C50 21.7886 46.7858 25.0028 42.8216 25.0028V27.842C42.8221 29.7979 42.0946 31.684 40.7809 33.133C39.4672 34.5821 37.6612 35.4904 35.7147 35.6811V47.5558C35.7147 47.9129 35.4111 48.2165 35.0361 48.2165H31.0184C30.6434 48.2165 30.3398 47.9129 30.3398 47.5379V37.04L27.8399 47.5379C27.7327 47.9308 27.3756 48.2165 26.9649 48.2165H23.1614C22.7329 48.2165 22.4114 47.8058 22.5186 47.4129L25.2989 35.7168H18.1312L20.9115 47.4129C21.0186 47.8058 20.6972 48.2165 20.2686 48.2165H16.4652C16.0545 48.2165 15.6973 47.9308 15.5902 47.5379L13.5009 38.7703L11.8046 40.4667C11.4296 40.8417 11.3224 41.3952 11.5367 41.8774L13.8581 47.2879C14.0724 47.7165 13.7509 48.2165 13.2688 48.2165H9.37606C9.10821 48.2165 8.85822 48.0558 8.76893 47.8058L4.26905 37.2882C3.80478 36.2525 3.57264 35.1275 3.57264 34.0026V25.8956C3.57264 24.4957 3.82085 23.1546 4.27441 21.9118C2.90905 20.7192 1.81961 19.2438 1.08171 17.5879C0.343819 15.9321 -0.0248528 14.1354 0.00130081 12.3228C0.0905838 5.57295 5.62616 0.0730942 12.376 0.00166752ZM43.1912 15.6209C43.1912 14.9799 42.6734 14.4834 42.0538 14.4834C41.4127 14.4834 40.9163 15.0013 40.9163 15.6209V17.3173C40.9186 17.6182 41.0392 17.9062 41.252 18.119C41.4649 18.3318 41.7528 18.4524 42.0538 18.4548C42.2033 18.4552 42.3514 18.4261 42.4896 18.3691C42.6278 18.3121 42.7534 18.2284 42.8591 18.1227C42.9649 18.0169 43.0486 17.8914 43.1056 17.7531C43.1626 17.6149 43.1917 17.4668 43.1912 17.3173V15.6209Z"
            ></path>
          </svg>
        </div>
        <div>T</div>
        <div>O</div>
        <div>D</div>
        <div>O</div>
        <div className="icon-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 50 47"
            height="47"
            width="40"
          >
            <path
              fill="#3EB3C2"
              d="M25.9824 18.7517L40.625 23.9809V45.3126C40.625 45.727 40.4604 46.1244 40.1674 46.4174C39.8743 46.7104 39.4769 46.875 39.0625 46.875H32.8125C32.3981 46.875 32.0007 46.7104 31.7076 46.4174C31.4146 46.1244 31.25 45.727 31.25 45.3126V34.3757H15.625V45.3126C15.625 45.727 15.4604 46.1244 15.1674 46.4174C14.8743 46.7104 14.4769 46.875 14.0625 46.875H7.8125C7.3981 46.875 7.00067 46.7104 6.70765 46.4174C6.41462 46.1244 6.25 45.727 6.25 45.3126V24.4242C2.62109 23.1303 0 19.695 0 15.6269C0 14.7981 0.32924 14.0033 0.915291 13.4173C1.50134 12.8313 2.2962 12.502 3.125 12.502C3.9538 12.502 4.74866 12.8313 5.33471 13.4173C5.92076 14.0033 6.25 14.7981 6.25 15.6269C6.25155 16.4551 6.58129 17.249 7.167 17.8347C7.75272 18.4204 8.54667 18.7501 9.375 18.7517H25.9824ZM50 7.81483V10.9396C50 12.5971 49.3415 14.1868 48.1694 15.3588C46.9973 16.5308 45.4076 17.1893 43.75 17.1893H40.625V20.6637L28.125 16.2001V1.5652C28.125 0.173679 29.8066 -0.523545 30.792 0.460771L33.4561 3.1276H38.6934C39.7588 3.1276 41.0127 3.901 41.4883 4.85504L42.1875 6.25242H48.4375C48.8519 6.25242 49.2493 6.41703 49.5424 6.71004C49.8354 7.00305 50 7.40045 50 7.81483ZM39.0625 7.81483C39.0625 7.50581 38.9709 7.20374 38.7992 6.9468C38.6275 6.68986 38.3834 6.4896 38.0979 6.37135C37.8124 6.25309 37.4983 6.22215 37.1952 6.28244C36.8921 6.34273 36.6137 6.49153 36.3951 6.71004C36.1766 6.92854 36.0278 7.20694 35.9675 7.51002C35.9072 7.81309 35.9382 8.12724 36.0564 8.41273C36.1747 8.69823 36.375 8.94224 36.6319 9.11392C36.8889 9.2856 37.191 9.37723 37.5 9.37723C37.9144 9.37723 38.3118 9.21262 38.6049 8.91961C38.8979 8.62661 39.0625 8.2292 39.0625 7.81483Z"
            ></path>
          </svg>
        </div>
        <div className="middle">loading</div>
      </div>
      
    );
  }

export { TodosLoading };