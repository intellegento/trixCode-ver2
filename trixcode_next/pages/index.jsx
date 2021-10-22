import React from 'react'
import Head from 'next/head'
import styles from '../styles/header.module.scss'
import clsx from  'clsx'




function Home() {
  return (
    <div className={styles.container}>
       <Head>
          <title>TrixCode Next_JS</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className={ clsx(styles.header, styles.header_home)}>
              <div className={styles.header_logo}>
                <svg width="98" height="52" viewBox="0 0 98 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.2355 14.0744C12.8017 14.0744 13.0026 13.5804 13.0392 13.5072C12.9844 13.306 12.9661 13.0133 12.9661 12.6291V4.08557C12.9661 3.6465 13.0026 3.3355 13.0757 3.13426C13.1488 2.93302 13.2766 2.80496 13.4776 2.73178C13.5872 2.69519 13.715 2.6586 13.8794 2.64031V2.25612L11.2673 2.29271L7.34009 12.2266L3.3215 2.23783H0.618089V2.64031C0.782486 2.6586 0.91035 2.69519 1.01995 2.73178C1.22088 2.80496 1.34874 2.93302 1.42181 3.13426C1.49487 3.3355 1.5314 3.6465 1.5314 4.08557V12.4644C1.5314 12.9035 1.49487 13.2328 1.42181 13.4523C1.34874 13.6719 1.20261 13.8365 1.00168 13.928C0.892084 13.9829 0.76422 14.0195 0.599823 14.0561V14.4585H3.04751V14.0561C2.82831 14.0195 2.66392 13.9829 2.53605 13.928C2.29859 13.8365 2.13419 13.6719 2.06113 13.4523C1.98806 13.2328 1.95153 12.9035 1.95153 12.4644V3.37209L6.55464 14.55H6.8469L11.2491 3.39038V12.6291C11.2491 13.0682 11.2125 13.3792 11.1395 13.5804C11.0664 13.7816 10.9386 13.9097 10.7376 13.9829C10.6463 14.0195 10.5184 14.0561 10.354 14.0744V14.4768H13.8794V14.0744H12.2355Z" fill="white"/>
                  <path d="M31.3176 14.1292C31.8839 14.1292 32.0848 13.617 32.1031 13.5438C31.9935 13.3975 31.9021 13.2145 31.8108 13.0133L27.3904 2.25612H27.025L22.769 12.6108C22.4219 13.4706 21.947 13.9646 21.3442 14.1109V14.4585C21.3442 14.4585 23.2439 14.4585 24.2303 14.4585V14.0561C23.9746 14.0195 23.7736 13.9463 23.6275 13.8548C23.3718 13.6902 23.2439 13.434 23.2439 13.0865C23.2439 12.7572 23.3718 12.2815 23.6092 11.6595L24.3581 9.83004H28.7786L29.8928 12.6657C30.039 13.0133 30.112 13.2877 30.112 13.4889C30.112 13.7268 30.0207 13.8914 29.8198 13.9829C29.6736 14.0378 29.4544 14.0927 29.1622 14.1292V14.4951H33.1077V14.1475H31.3359L31.3176 14.1292ZM24.5043 9.51903L26.5866 4.35999L28.6325 9.51903H24.5043Z" fill="white"/>
                  <path d="M42.4713 14.0744C43.0376 14.0744 43.2385 13.5621 43.2568 13.4889C43.202 13.2877 43.1837 12.995 43.1837 12.6108V4.06728C43.1837 3.62821 43.2202 3.3172 43.2933 3.11596C43.3664 2.91472 43.4942 2.78666 43.6952 2.71349C43.8048 2.6769 43.9326 2.64031 44.097 2.62201V2.21953H40.5534V2.62201C40.7178 2.64031 40.8456 2.6769 40.9552 2.71349C41.1562 2.78666 41.284 2.91472 41.3571 3.11596C41.4301 3.3172 41.4667 3.62821 41.4667 4.06728V12.6108C41.4667 13.0499 41.4301 13.3609 41.3571 13.5621C41.284 13.7634 41.1562 13.8914 40.9552 13.9646C40.8456 14.0012 40.7178 14.0378 40.5534 14.0561V14.4585H44.097V14.0744H42.4713Z" fill="white"/>
                  <path d="M59.3756 9.90322C59.1017 9.46415 58.7546 9.07996 58.3162 8.73237C57.8778 8.38477 57.275 7.98229 56.5078 7.54323L55.9781 7.23222C55.3753 6.88463 54.9004 6.59191 54.5716 6.35409C54.2428 6.11626 53.9688 5.84184 53.7496 5.51254C53.5304 5.18324 53.4208 4.79906 53.4208 4.35999C53.4208 3.77456 53.6218 3.29891 54.0419 2.93302C54.462 2.56713 54.9917 2.38418 55.6493 2.38418C56.5809 2.38418 57.2933 2.69519 57.7865 3.3355C58.1701 3.84774 58.4258 4.45146 58.5537 5.14665H59.1382V2.20124H58.7181C58.6815 2.45736 58.6267 2.6586 58.5719 2.78666C58.5171 2.91472 58.4258 2.96961 58.3162 2.96961C58.1701 2.96961 57.9691 2.89643 57.6951 2.73178C57.3664 2.53054 57.0558 2.36589 56.7453 2.25612C56.4348 2.14636 56.0146 2.09147 55.4849 2.09147C54.5168 2.09147 53.6948 2.3476 53.0372 2.85984C52.3797 3.37209 52.0509 4.10387 52.0509 5.07347C52.0509 5.67719 52.197 6.20773 52.471 6.66509C52.745 7.12245 53.1103 7.50664 53.5487 7.83594C53.9871 8.16524 54.5716 8.53113 55.284 8.9519C56.2704 9.51903 56.9828 10.0313 57.4394 10.4703C57.8961 10.9094 58.1153 11.4582 58.1153 12.0986C58.1153 12.8486 57.8778 13.4158 57.4212 13.7999C56.9645 14.1841 56.3982 14.3854 55.7407 14.3854C54.6629 14.3854 53.8592 14.0195 53.3295 13.2877C52.9459 12.7572 52.6902 12.1168 52.544 11.3668H51.9778L51.923 14.5866H52.3431C52.3797 14.3305 52.4345 14.1292 52.4893 14.0012C52.544 13.8731 52.6354 13.8182 52.745 13.8182C52.8911 13.8182 53.092 13.8914 53.366 14.0561C53.7131 14.2573 54.0602 14.4037 54.4255 14.5134C54.7908 14.6232 55.2657 14.6781 55.8503 14.6781C56.9645 14.6781 57.8961 14.3854 58.6267 13.8182C59.3574 13.2511 59.7227 12.4461 59.7227 11.4034C59.7227 10.8179 59.5948 10.3057 59.3209 9.86663L59.3756 9.90322Z" fill="white"/>
                  <path d="M73.4373 2.01829C72.323 2.01829 71.3184 2.29271 70.4416 2.84155C69.5648 3.39038 68.8707 4.14045 68.3775 5.11006C67.8843 6.07967 67.6469 7.19563 67.6469 8.45795C67.6469 9.75686 67.8843 10.8728 68.3592 11.8058C68.8342 12.7389 69.51 13.4523 70.3868 13.9463C71.2636 14.4402 72.2682 14.6781 73.419 14.6781C74.5333 14.6781 75.5379 14.4037 76.4147 13.8548C77.2915 13.306 77.9856 12.5559 78.4788 11.5863C78.972 10.6167 79.2094 9.50074 79.2094 8.23842C79.2094 6.93951 78.972 5.82355 78.497 4.89053C78.0221 3.95751 77.3463 3.24402 76.4695 2.75007C75.5927 2.25612 74.5881 2 73.4373 2V2.01829ZM73.3642 2.31101C74.1131 2.31101 74.789 2.56713 75.3918 3.06108C75.9946 3.55503 76.4695 4.25022 76.8348 5.16495C77.2001 6.07967 77.3828 7.12245 77.3828 8.3116C77.3828 9.50074 77.2184 10.5435 76.8896 11.4582C76.5608 12.373 76.1042 13.0865 75.5196 13.5987C74.9351 14.1109 74.2593 14.3671 73.4738 14.3671C72.7249 14.3671 72.049 14.1292 71.4463 13.6353C70.8435 13.1413 70.3503 12.4461 69.9849 11.5314C69.6196 10.6167 69.437 9.57391 69.437 8.38477C69.437 7.19563 69.6014 6.15285 69.9302 5.23812C70.2589 4.3234 70.7156 3.60991 71.3001 3.09767C71.8846 2.58542 72.5605 2.3293 73.346 2.3293L73.3642 2.31101Z" fill="white"/>
                  <path d="M94.9887 2.27442V2.6769C95.2079 2.71349 95.3905 2.75007 95.5184 2.80496C95.7559 2.89643 95.902 3.06108 95.975 3.28061C96.0481 3.50015 96.0846 3.82945 96.0846 4.26852V11.6412L89.6366 2.25612H87.0611V2.6586C87.2255 2.6769 87.3533 2.71349 87.4629 2.75007C87.6639 2.82325 87.7917 2.95131 87.8648 3.15255C87.9379 3.35379 87.9744 3.6648 87.9744 4.10387V12.4827C87.9744 12.9218 87.9379 13.2511 87.8648 13.4706C87.7917 13.6902 87.6456 13.8548 87.4447 13.9463C87.3351 14.0012 87.2072 14.0378 87.0428 14.0744V14.4768H89.4905V14.0744C89.2713 14.0378 89.0886 14.0012 88.9608 13.9463C88.7233 13.8548 88.5589 13.6902 88.4859 13.4706C88.4128 13.2511 88.3763 12.9218 88.3763 12.4827V3.39038L95.9933 14.4951H96.4682V4.28681C96.4682 3.84774 96.5048 3.51844 96.5778 3.29891C96.6509 3.07937 96.797 2.91472 96.998 2.82325C97.1076 2.76837 97.2354 2.73178 97.3998 2.69519V2.29271L94.9887 2.27442Z" fill="white"/>
                  <path d="M18.378 25.3744C17.3791 24.4248 15.8893 23.9501 13.8915 23.9501C13.6883 23.9501 10.9118 23.9501 9.76055 23.9501V24.3061C9.92985 24.3231 10.0653 24.357 10.1669 24.3909C10.3531 24.4587 10.4716 24.5774 10.5393 24.764C10.6071 24.9505 10.6409 25.2387 10.6409 25.6457V33.5642C10.6409 33.9712 10.6071 34.2595 10.5393 34.446C10.4716 34.6325 10.3531 34.7512 10.1669 34.819C10.0653 34.8529 9.92985 34.8868 9.76055 34.9038V35.2599H13.7391C15.0089 35.2599 16.1094 35.0225 17.0236 34.5477C17.9378 34.0729 18.6319 33.3947 19.1229 32.513C19.6139 31.6482 19.8509 30.6308 19.8509 29.4778C19.8509 27.6804 19.3599 26.307 18.3611 25.3574L18.378 25.3744ZM17.7516 32.5469C17.4807 33.3269 17.0067 33.9203 16.3125 34.3273C15.6184 34.7342 14.6703 34.9377 13.4683 34.9377C13.4513 34.9377 13.4513 34.9377 13.4344 34.9377H11.5382C12.063 34.9377 12.2493 34.4799 12.2662 34.4121C12.1985 34.2255 12.1646 33.9373 12.1646 33.5642V25.5779C12.1646 25.1879 12.1985 24.8996 12.2662 24.7131C12.3339 24.5266 12.4524 24.3909 12.6217 24.3231C12.791 24.2553 13.0619 24.2214 13.4175 24.2214C14.5856 24.2214 15.5168 24.4079 16.194 24.7979C16.8712 25.1879 17.3622 25.7644 17.6669 26.5444C17.9717 27.3243 18.124 28.3248 18.124 29.5456C18.124 30.7665 17.9886 31.7669 17.7177 32.5469H17.7516Z" fill="white"/>
                  <path d="M33.8514 34.9547C34.3762 34.9547 34.5624 34.4799 34.5794 34.4121C34.4778 34.2764 34.3931 34.1068 34.3085 33.9203L30.2114 23.9501H29.8728L25.928 33.5473C25.6064 34.3442 25.1662 34.8021 24.6075 34.9377V35.2599C24.6075 35.2599 26.3682 35.2599 27.2825 35.2599V34.8868C27.0454 34.8529 26.8592 34.7851 26.7238 34.7003C26.4867 34.5477 26.3682 34.3103 26.3682 33.9882C26.3682 33.6829 26.4867 33.2421 26.7068 32.6656L27.401 30.9699H31.4981L32.5308 33.5982C32.6662 33.9203 32.734 34.1747 32.734 34.3612C32.734 34.5816 32.6493 34.7342 32.4631 34.819C32.3276 34.8699 32.1245 34.9208 31.8536 34.9547V35.2938H35.5105V34.9716H33.8683L33.8514 34.9547ZM27.5364 30.6817L29.4664 25.9L31.3626 30.6817H27.5364Z" fill="white"/>
                  <path d="M50.5211 34.5816C50.4534 34.6495 50.3856 34.7173 50.3179 34.7681C50.1825 34.8699 50.0301 34.9208 49.8439 34.9208C49.6238 34.9208 49.4545 34.819 49.336 34.6325C49.2174 34.446 49.0989 34.1068 48.9804 33.6151L48.5572 31.9873C48.4048 31.3091 48.1508 30.8173 47.8122 30.5121C47.4736 30.2069 46.9319 29.9865 46.187 29.8678L45.9838 29.8339C46.7795 29.7152 47.4229 29.4947 47.9138 29.1556C48.4048 28.8165 48.7603 28.4435 48.9635 28.0196C49.1667 27.5956 49.2682 27.1717 49.2682 26.7648C49.2682 25.9509 48.9127 25.2896 48.2016 24.7809C47.4906 24.2722 46.4917 24.0179 45.1881 24.0179L41.091 24.0009V24.374C41.2433 24.3909 41.3619 24.4248 41.4634 24.4587C41.6497 24.5266 41.7682 24.6453 41.8359 24.8318C41.9036 25.0183 41.9375 25.3066 41.9375 25.7135V33.6321C41.9375 34.039 41.9036 34.3273 41.8359 34.5138C41.7682 34.7003 41.6497 34.819 41.4634 34.8868C41.3619 34.9207 41.2433 34.9547 41.091 34.9716V35.3447H44.3585V34.9716C44.2061 34.9547 44.0876 34.9207 44.003 34.8868C43.8167 34.819 43.6982 34.7003 43.6305 34.5138C43.5628 34.3273 43.5289 34.039 43.5289 33.6321V29.9526H45.1373C45.5605 29.9526 45.8991 30.0373 46.1362 30.2239C46.3732 30.4104 46.5425 30.6478 46.661 30.953C46.7795 31.2582 46.898 31.6821 47.0335 32.2417L47.4059 33.8356C47.5583 34.4799 47.7784 34.9208 48.0831 35.1751C48.3879 35.4294 48.7603 35.5651 49.2174 35.5651C49.6407 35.5651 49.9793 35.4803 50.2333 35.3277C50.4026 35.226 50.5719 35.0734 50.7412 34.8868L50.5211 34.5816ZM44.6294 29.6643H42.7501C43.275 29.6643 43.4612 29.1895 43.4781 29.1217V25.7305C43.4781 25.3405 43.512 25.0522 43.5797 24.8657C43.6474 24.6792 43.7659 24.5435 43.9352 24.4757C44.1045 24.4079 44.3585 24.374 44.714 24.374C45.7129 24.374 46.424 24.5944 46.8642 25.0353C47.3043 25.4761 47.5244 26.1374 47.5244 27.0022C47.5244 27.833 47.3213 28.4774 46.898 28.9521C46.4748 29.4269 45.7129 29.6643 44.5955 29.6643H44.6294Z" fill="white"/>
                  <path d="M58.4337 34.9038C58.9585 34.9038 59.1447 34.429 59.1617 34.3612C59.1109 34.1747 59.0939 33.9034 59.0939 33.5473V25.6287C59.0939 25.2218 59.1278 24.9335 59.1955 24.747C59.2632 24.5605 59.3818 24.4418 59.568 24.374C59.6696 24.34 59.7881 24.3061 59.9404 24.2892V23.9161H56.656V24.2892C56.8084 24.3061 56.9269 24.34 57.0285 24.374C57.2147 24.4418 57.3332 24.5605 57.4009 24.747C57.4686 24.9335 57.5025 25.2218 57.5025 25.6287V33.5473C57.5025 33.9542 57.4686 34.2425 57.4009 34.429C57.3332 34.6155 57.2147 34.7342 57.0285 34.8021C56.9269 34.836 56.8084 34.8699 56.656 34.8868V35.2599H59.9404V34.9038H58.4337Z" fill="white"/>
                  <path d="M74.1015 32.5808H73.6443C73.5597 33.0895 73.4581 33.4964 73.3227 33.7847C73.1534 34.1747 72.8825 34.4629 72.51 34.6325C72.1376 34.8021 71.5958 34.8868 70.9017 34.8868H69.6658C69.2594 34.8868 68.9716 34.8529 68.7854 34.8021C68.5992 34.7512 68.4806 34.6325 68.4129 34.446C68.3452 34.2595 68.3113 33.9712 68.3113 33.5642V29.7321H69.4287C69.8858 29.7321 70.2414 29.8508 70.4953 30.0713C70.7493 30.2917 70.9017 30.6308 70.9525 31.0717C70.9694 31.1734 70.9863 31.2582 71.0032 31.343H71.4604L71.4265 27.85H70.9525C70.9186 28.1213 70.8678 28.3587 70.817 28.5452C70.7493 28.7826 70.6138 28.9861 70.3938 29.1556C70.1737 29.3252 69.8689 29.41 69.4795 29.41H67.6172C68.142 29.41 68.3283 28.9521 68.3621 28.8843V25.6457C68.3621 25.2387 68.396 24.9505 68.4637 24.764C68.5314 24.5774 68.6499 24.4587 68.8362 24.4079C69.0224 24.357 69.3102 24.3231 69.7165 24.3231H71.1217C71.7143 24.3231 72.1545 24.4079 72.4423 24.5605C72.7301 24.7131 72.9333 24.9505 73.0518 25.2896C73.1364 25.5439 73.2211 25.8831 73.2888 26.3239H73.7459V23.967H65.8734V24.3231C66.0427 24.34 66.1781 24.374 66.2797 24.4079C66.466 24.4757 66.5845 24.5944 66.6522 24.7809C66.7199 24.9674 66.7538 25.2557 66.7538 25.6626V33.5812C66.7538 33.9882 66.7199 34.2764 66.6522 34.4629C66.5845 34.6495 66.466 34.7681 66.2797 34.836C66.1781 34.8699 66.0427 34.9038 65.8734 34.9208V35.2768H74.1015V32.5808Z" fill="white"/>
                  <path d="M87.7879 32.4451C87.7032 32.9877 87.6017 33.4116 87.4662 33.7338C87.2969 34.1408 87.026 34.446 86.6536 34.6325C86.2811 34.819 85.7393 34.9038 85.0452 34.9038H81.7608C82.3195 34.9038 82.5057 34.3612 82.5057 34.3612C82.4549 34.1747 82.438 33.9203 82.438 33.5812V25.6626C82.438 25.2557 82.4718 24.9674 82.5395 24.7809C82.6073 24.5944 82.7258 24.4757 82.912 24.4079C82.9967 24.374 83.1152 24.34 83.2675 24.3231V23.9501H79.9831V24.3231C80.1355 24.34 80.254 24.374 80.3556 24.4079C80.5418 24.4757 80.6603 24.5944 80.728 24.7809C80.7957 24.9674 80.8296 25.2557 80.8296 25.6626V33.5812C80.8296 33.9882 80.7957 34.2764 80.728 34.4629C80.6603 34.6495 80.5418 34.7681 80.3556 34.836C80.254 34.8699 80.1355 34.9038 79.9831 34.9208V35.2938H88.2619V32.4621L87.7879 32.4451Z" fill="white"/>
                  <path d="M41.4098 43.8006C40.9141 43.8006 40.547 43.9385 40.1707 44.2142C39.7944 44.49 39.5007 44.8669 39.2896 45.3541C39.0785 45.8413 38.9775 46.3837 38.9775 46.9812C38.9775 47.5787 39.0785 48.1119 39.2896 48.5715C39.5007 49.0311 39.7852 49.3804 40.1523 49.6286C40.5195 49.8768 40.8591 49.9963 41.318 49.9963C41.8044 49.9963 42.1716 49.8584 42.5479 49.5827C42.9242 49.3069 43.2179 48.93 43.429 48.4428C43.6401 47.9556 43.7503 47.4132 43.7503 46.8065C43.7503 46.209 43.6493 45.685 43.4474 45.2254C43.2454 44.7658 42.9609 44.4165 42.5938 44.1683C42.2267 43.9201 41.8871 43.8006 41.4281 43.8006H41.4098ZM41.3364 44.0028C41.7861 44.0028 42.0614 44.2326 42.346 44.6923C42.6305 45.1611 42.7682 45.8689 42.7682 46.8249C42.7682 47.4316 42.7039 47.9556 42.5846 48.3968C42.4653 48.8381 42.2909 49.1782 42.0706 49.4172C41.8503 49.6562 41.6943 49.7757 41.4098 49.7757C40.96 49.7757 40.6847 49.5459 40.4002 49.0771C40.1156 48.6175 39.978 47.9004 39.978 46.9352C39.978 46.3285 40.0422 45.8046 40.1615 45.3633C40.2808 44.9221 40.4552 44.5819 40.6755 44.3521C40.8958 44.1223 41.0518 44.0028 41.3364 44.0028Z" fill="white"/>
                  <path d="M50.4654 47.1099C50.1626 46.8157 49.7862 46.6135 49.2539 46.5032V46.4848C49.6945 46.3469 50.1075 46.1539 50.3461 45.9149C50.5756 45.6759 50.6949 45.4093 50.6949 45.1151C50.6949 44.7382 50.5205 44.4257 50.1626 44.1683C49.8046 43.9109 49.2814 43.7822 48.7491 43.7822C48.3269 43.7822 47.9506 43.8649 47.6202 44.0304C47.2897 44.1959 47.0603 44.4165 46.9318 44.6923L47.1521 44.7658C47.2714 44.5728 47.4458 44.4165 47.666 44.3062C47.8863 44.1959 48.125 44.1407 48.3911 44.1407C48.7674 44.1407 49.0795 44.2418 49.3273 44.4441C49.5751 44.6463 49.7036 44.8945 49.7036 45.1887C49.7036 45.8229 49.1897 46.2734 48.1709 46.5308V46.8341C48.7032 46.8433 49.1346 47.0088 49.4742 47.3305C49.823 47.6614 49.9973 48.0291 49.9973 48.4428C49.9973 48.8197 49.8321 49.123 49.5109 49.3529C49.1897 49.5827 48.7858 49.7022 48.2994 49.7022C47.9322 49.7022 47.5559 49.6103 47.1704 49.4264L47.0419 49.6194C47.2071 49.7114 47.3632 49.7849 47.5192 49.8401C47.8037 49.9412 48.1433 49.9871 48.538 49.9871C49.2539 49.9871 49.7954 49.8125 50.2452 49.4724C50.6949 49.1322 50.9244 48.691 50.9244 48.1486C50.9244 47.7442 50.7775 47.3949 50.4746 47.1007L50.4654 47.1099Z" fill="white"/>
                  <path d="M56.5573 43.8006C56.0617 43.8006 55.6945 43.9385 55.3182 44.2142C54.9419 44.49 54.6482 44.8669 54.4371 45.3541C54.226 45.8413 54.125 46.3837 54.125 46.9812C54.125 47.5787 54.226 48.1119 54.4371 48.5715C54.6482 49.0311 54.9327 49.3804 55.2999 49.6286C55.667 49.8768 56.0066 49.9963 56.4655 49.9963C56.952 49.9963 57.3191 49.8584 57.6954 49.5827C58.0717 49.3069 58.3654 48.93 58.5765 48.4428C58.7876 47.9556 58.8978 47.4132 58.8978 46.8065C58.8978 46.209 58.7968 45.685 58.5949 45.2254C58.393 44.7658 58.1084 44.4165 57.7413 44.1683C57.3742 43.9201 57.0346 43.8006 56.5756 43.8006H56.5573ZM56.4839 44.0028C56.9336 44.0028 57.209 44.2326 57.4935 44.6923C57.778 45.1611 57.9157 45.8689 57.9157 46.8249C57.9157 47.4316 57.8514 47.9556 57.7321 48.3968C57.6128 48.8381 57.4384 49.1782 57.2181 49.4172C56.9978 49.6562 56.8418 49.7757 56.5573 49.7757C56.1076 49.7757 55.8322 49.5459 55.5477 49.0771C55.2631 48.6175 55.1255 47.9004 55.1255 46.9352C55.1255 46.3285 55.1897 45.8046 55.309 45.3633C55.4284 44.9221 55.6027 44.5819 55.823 44.3521C56.0433 44.1223 56.1993 44.0028 56.4839 44.0028Z" fill="white"/>
                  </svg>
  
              </div>
              <buttton className={styles.header_button} type="button">
                  <span className={styles.header_button_item}>Menu</span>
              </buttton>
              <nav className={styles.header_nav}>
                  <a href="index.html" className={ clsx(styles.header_nav_link, styles.active)}>home</a>
                  <a href="essentials.html" className={styles.header_nav_link}>essentials</a>
                  <a href="" className={styles.header_nav_link}>it peases</a>
                  <a href="" className={styles.header_nav_link}>custom</a>
              </nav>
  
          <div className={styles.header_title}><h1 className={styles.Title} id="Title"><p>err one</p>
              <p>deserves</p>
              <p>to be iced out</p>
              </h1>
          </div>
          <div className={styles.header_footer}>
              <div className={styles.header_social}>
                  <a className={styles.header_social_link} href="">instagram</a>
                  <a href="">twitter</a>
              </div>
              <div className={styles.header_watch_video}>
                  <a href="">watch video</a>
              </div>
          </div>
          <form className={styles.header_form}>
              <div className={styles.slide_submit}>
              </div>
              <button type="submit" className={styles.submit_btn}>
                    <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9L22 9M2 9L8.92308 1M2 9L8.92308 17" stroke="#5A6B6F" strokeWidth="1.6"/>
                    </svg>
                  <p>swipe left</p>
                </button> 
               
            </form>
        </header >
    </div>
  )

}

export default Home