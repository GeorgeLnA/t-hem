import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const GameLogo = ({ className = "w-[119px] h-[68px]" }: { className?: string }) => (
  <svg 
    className={className}
    viewBox="0 0 119 69" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M34.0341 19.9131C38.5841 17.5471 44.3171 11.1771 44.4081 5.62606V5.53506C44.3171 4.26106 43.9531 3.44206 43.1341 3.44206C41.5871 3.44206 36.6731 6.08106 35.3991 6.90006C20.5661 16.4551 2.18406 44.5741 2.00206 61.3181C2.09306 62.7741 2.27506 66.0501 4.18606 66.0501C7.00707 66.0501 13.1951 60.1351 15.1061 58.1331C18.5641 54.4931 22.0221 50.7621 25.4801 47.0311C26.6631 45.7571 27.8461 44.4831 29.0291 43.2091C29.2111 42.9361 29.4841 42.6631 29.6661 42.2991C29.3021 42.2991 28.8471 42.3901 28.4831 42.5721C27.6641 42.7541 26.7541 43.0271 25.9351 43.3001C24.2971 43.7551 22.6591 44.3011 21.0211 44.6651C20.5661 44.7561 20.1111 44.9381 19.6561 44.9381C18.8371 44.9381 18.0181 44.6651 17.2901 43.6641C17.1081 43.3911 17.1991 43.1181 17.5631 42.9361L18.0181 42.8451C18.3821 42.7541 18.6551 42.5721 18.9281 42.5721C19.9291 42.2991 20.9301 42.1171 21.9311 41.8441C24.7521 41.2071 27.5731 40.5701 30.4851 39.9331C31.7591 39.6601 32.5781 39.0231 33.2151 37.8401C34.1251 36.2931 35.1261 34.7461 36.2181 33.2901C36.4911 32.8351 36.9461 32.3801 37.5831 32.3801C37.9471 32.3801 38.4021 32.5621 38.9481 33.1081C39.0391 33.2901 39.0391 33.5631 38.9481 33.7451C37.6741 35.3831 36.4911 37.1121 35.2171 38.8411C35.6721 38.7501 36.1271 38.7501 36.4911 38.6591C37.0371 38.6591 37.4921 38.5681 37.9471 38.5681C39.1301 38.3861 40.3131 38.2951 41.4961 38.2951H41.5871C43.1341 38.2951 43.7711 38.8411 43.7711 40.2971C43.7711 40.6611 43.7711 41.0251 43.6801 41.4801C43.4981 41.8441 43.0431 42.1171 42.5881 42.1171C41.5871 42.1171 41.4051 41.0251 41.4051 40.2061H41.1321C39.4031 40.2061 34.3071 40.4791 33.3971 42.1171C30.4851 47.5771 26.7541 56.1311 26.2081 62.4101C26.2081 62.7741 26.2081 62.5921 26.2081 62.9561H28.1191C28.4831 62.9561 28.6651 63.3201 28.4831 63.6841C27.7551 64.9581 27.2091 65.5041 25.6621 65.5041C24.4791 65.2311 24.0241 64.2301 24.0241 63.2291V62.7741C24.2061 61.5911 24.2971 60.3171 24.6611 59.2251C25.6621 56.0401 26.8451 52.6731 27.9371 49.4881C28.2101 48.4871 28.5741 47.5771 28.9381 46.5761C28.9381 46.4851 29.0291 46.3031 29.0291 46.2121C23.9331 51.7631 18.5641 57.2231 13.2861 62.6831C11.3751 64.5941 7.09806 67.8701 4.36806 67.8701C0.819064 67.7791 0.0910645 64.1391 0.0910645 61.2271C0.0910645 59.4981 0.364064 57.7691 0.728064 56.0401C4.36806 38.8411 16.7441 19.7311 29.8481 8.35606C32.6691 5.89906 38.8571 1.25806 42.8611 1.25806C45.6821 1.25806 46.5011 3.44206 46.5011 5.80806C46.5011 11.9051 41.7691 17.3651 37.3101 20.9141C36.6731 21.3691 36.1271 21.6421 35.6721 21.6421C35.1261 21.6421 34.6711 21.3691 33.9431 20.6411C33.7611 20.3681 33.7611 20.0041 34.0341 19.9131Z" fill="currentColor"/>
    <path d="M55.6793 47.7591C56.6803 47.7591 60.5023 45.2111 63.8693 42.9361C66.5083 41.2071 68.8743 39.6601 69.5113 39.6601C69.8753 39.6601 70.2393 39.7511 70.5123 39.8421L70.6943 39.9331C71.0583 40.0241 71.1493 40.3881 70.8763 40.6611C69.4203 42.3901 57.7723 50.0341 55.5883 50.0341C54.0413 50.0341 53.1313 49.0331 53.1313 47.4861C53.1313 45.9391 53.9503 43.0271 54.6783 41.0251C54.0413 41.6621 53.1313 42.4811 52.2213 43.3911C48.5813 46.9401 43.8493 51.5811 41.7563 51.5811C40.2093 51.5811 39.9363 50.3981 39.9363 49.2151C39.9363 45.2111 50.5833 33.5631 55.2243 33.5631C56.4983 33.5631 57.4083 34.1091 58.2273 34.9281L59.3193 34.3821C59.4103 34.2911 59.6833 34.3821 59.7743 34.3821C60.2293 34.7461 60.8663 35.2011 60.8663 36.0201C60.8663 36.2021 60.6843 36.4751 60.3203 36.8391C59.0463 38.5681 55.4063 43.4821 55.3153 47.2131V47.6681C55.4063 47.6681 55.4973 47.7591 55.6793 47.7591ZM42.0293 49.4881L41.7563 49.6701C44.9413 47.3041 47.3073 44.9381 49.7643 42.6631C51.8573 40.6611 53.9503 38.6591 56.4983 36.5661C56.3163 36.1111 56.0433 35.8381 55.5883 35.8381C50.9473 35.8381 43.9403 44.9381 42.0293 49.4881Z" fill="currentColor"/>
    <path d="M100.443 39.8421H100.534C100.989 39.5691 101.444 39.2961 101.899 39.2961C102.445 39.2961 102.9 39.5691 103.355 40.2061C103.537 40.3881 103.446 40.6611 103.264 40.8431L102.991 41.0251C102.718 41.2071 102.445 41.4801 102.263 41.5711C101.626 41.9351 100.989 42.2991 100.352 42.7541C98.7137 43.6641 97.0757 44.6651 95.3467 45.4841C94.4367 45.9391 93.4357 46.2121 92.6167 46.2121C90.4327 46.2121 88.8857 44.5741 88.3397 41.7531C88.2487 41.0251 88.0667 40.2971 87.9757 39.4781C87.8847 39.0231 87.9757 39.2051 87.8847 38.7501L87.5207 38.9321C86.9747 39.2051 86.5197 39.4781 86.0647 39.7511C84.6997 40.8431 83.4257 41.9351 82.1517 43.0271C81.6057 43.3911 81.1507 43.8461 80.6957 44.2101C80.3317 44.4831 80.0587 44.7561 79.6947 45.0291C79.0577 45.5751 78.4207 46.2121 77.6927 46.6671C77.1467 47.1221 76.6007 47.5771 75.8727 47.5771C75.5087 47.5771 75.1447 47.3951 74.7807 47.2131C74.0527 46.7581 73.7797 46.0301 73.7797 45.3021C73.7797 45.0291 73.8707 44.6651 73.8707 44.3921C74.1437 43.3911 74.3257 42.4811 74.5077 41.5711C74.7807 40.4791 75.0537 39.3871 75.3267 38.2951V38.2041L75.2357 38.3861C71.6867 41.6621 68.7747 46.6671 66.8637 51.0351C66.6817 51.3991 66.4087 51.9451 66.2267 52.3091L65.9537 52.7641C65.8627 52.9461 65.6807 53.0371 65.4987 53.0371C64.4067 52.9461 64.0427 52.4911 64.0427 51.7631C64.0427 51.5811 64.0427 51.3991 64.1337 51.2171C66.3177 45.5751 68.4107 39.9331 70.6857 34.2911C70.6857 34.1091 70.7767 34.0181 70.9587 33.8361L71.1407 33.6541C71.6867 33.1991 72.0507 33.1081 72.3237 33.1081C73.0517 33.1081 73.1427 33.8361 73.1427 34.5641C72.6877 35.6561 72.1417 37.1121 71.5957 38.4771C71.5047 38.6591 71.4137 38.8411 71.3227 39.0231C71.5957 38.7501 71.8687 38.3861 72.1417 38.0221L72.2327 37.9311C73.0517 37.1121 73.7797 36.2931 74.6897 35.5651C75.0537 35.2921 75.7817 35.0191 76.3277 35.0191C77.3287 35.0191 77.8747 36.3841 77.8747 37.2031L77.7837 37.2941C77.7837 38.2951 77.5107 39.2051 77.3287 40.2061C76.9647 41.3891 76.6917 42.7541 76.4187 43.9371L76.2367 44.7561L76.5097 44.5741C76.9647 44.2101 77.3287 43.8461 77.7837 43.4821C78.5117 42.9361 79.1487 42.2991 79.8767 41.7531C81.2417 40.5701 82.6977 39.3871 84.0627 38.2041C84.9727 37.4761 86.7017 36.4751 87.8847 36.4751C89.0677 36.4751 89.8867 37.2031 90.2507 38.6591C90.3417 39.2961 90.4327 39.8421 90.4327 40.3881C90.5237 40.9341 90.5237 41.3891 90.6147 41.8441C90.8877 43.2091 91.5247 43.9371 92.2527 44.0281C92.7077 43.9371 93.2537 43.8461 93.8907 43.5731C95.5287 42.7541 96.9847 41.8441 98.5317 40.9341C99.1687 40.5701 99.8057 40.2061 100.443 39.8421Z" fill="currentColor"/>
    <path d="M116.4 40.0241L116.582 39.9331C116.855 39.6601 117.219 39.4781 117.583 39.4781C117.947 39.4781 118.311 39.6601 118.675 40.1151C118.766 40.2971 118.766 40.5701 118.675 40.6611L118.493 40.9341C118.402 41.1161 118.22 41.3891 118.038 41.5711C117.583 41.9351 117.128 42.2991 116.582 42.7541C113.943 45.1201 110.758 47.9411 107.664 49.1241C106.663 49.4881 105.571 49.7611 104.661 49.7611C101.931 49.7611 99.7467 47.5771 99.7467 44.8471C99.7467 43.7551 100.02 42.7541 100.566 41.6621C101.294 40.1151 102.386 38.6591 103.387 37.2031L104.024 36.3841C104.479 35.7471 105.571 35.0191 106.39 35.0191C107.846 35.0191 108.119 36.2021 108.119 37.3851C107.937 37.9311 107.664 38.5681 107.3 38.9321L107.209 39.2051C106.299 40.3881 105.298 41.7531 104.388 42.9361C103.933 43.3911 103.387 43.7551 102.841 44.2101C102.568 44.3921 102.386 44.4831 102.113 44.7561C102.022 44.9381 102.022 45.1201 102.022 45.3021C102.022 46.6671 102.841 47.5771 104.206 47.6681C107.755 47.5771 111.122 44.8471 113.579 42.5721C114.58 41.5711 115.581 40.6611 116.4 40.0241ZM105.389 38.1131L106.117 37.8401L105.662 37.4761L105.389 38.1131Z" fill="currentColor"/>
  </svg>
);

const FGLogo = ({ className = "w-12 h-10" }: { className?: string }) => (
  <svg 
    className={className}
    viewBox="0 0 47 42" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M24.3723 24.7267H39.756L33.9743 32.9886H30.0664H19.2867L13.4423 41.1784H29.9277H40.0385L45.883 32.9886V24.7267V20.6289V16.5312H30.2109L24.3723 24.7267Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M29.7327 0.212708H24.5975H18.4015L0.954895 25.082V41.236L24.5743 8.42127H30.8874H45.8813V7.59984V0.212708H29.7327Z" fill="currentColor"/>
  </svg>
);

const FreeGameLogo = ({ className = "w-full h-auto" }: { className?: string }) => (
  <svg 
    className={className}
    viewBox="0 0 1380 214" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M127.809 43.1814H42.5955V86.2647H127.809V127.24H42.5955V212.334H0.0331421V2.20605H127.809V43.1814Z" fill="currentColor"/>
    <path d="M267.049 212.334L229.622 132.134H203.98V212.334H161.308V2.20605H250.601C260.038 2.20605 266.336 3.25991 275.077 9.56517C282.426 14.8166 293.273 25.6767 298.161 32.6786C304.458 41.4309 305.51 47.7362 305.51 57.1851V77.1551C305.51 86.6041 304.458 92.9091 298.161 101.662C292.916 109.021 282.07 119.881 275.077 124.775C274.024 125.472 273.329 126.168 272.276 126.525L314.252 212.334H267.031H267.049ZM203.98 43.1814V91.1589H249.905C250.262 91.1589 253.045 89.0509 256.898 85.2104C260.751 81.3522 262.839 78.5482 262.839 78.2088V56.1491C262.839 55.792 260.734 53.0057 256.898 49.1473C253.045 45.2891 250.244 43.1814 249.905 43.1814H203.98Z" fill="currentColor"/>
    <path d="M472.515 43.1814H387.301V86.2647H469.365V127.24H387.301V171.359H472.515V212.334H344.739V2.20605H472.515V43.1814Z" fill="currentColor"/>
    <path d="M639.495 43.1814H554.285V86.2647H636.35V127.24H554.285V171.359H639.495V212.334H511.72V2.20605H639.495V43.1814Z" fill="currentColor"/>
    <path d="M784.931 127.78H748.952V88.4244H803.677L827.425 107.755V168.388V212.708H790.689V190.918C785.809 193.846 767.474 213.768 760.691 213.768C739.789 213.768 740.758 213.768 721.018 213.768C703.003 213.768 673.081 185.222 673.081 166.205L672.994 49.2394C672.994 28.8362 703.003 0.690009 723.113 0.690009C743.66 0.690103 752.371 0.689973 773.831 0.690009C794.317 0.690009 825.492 26.4154 825.492 49.2394C825.492 56.2085 825.492 58.4681 825.492 63.6962H783.146V54.2035L768.829 41.7461H729.927L715.651 54.2035V160.37L728.917 173.342H758.758L784.931 149.844V127.78Z" fill="currentColor"/>
    <path d="M1379.96 43.1814H1294.75V86.2647H1376.81V127.24H1294.75V171.359H1379.96V212.334H1252.18V2.20605H1379.96V43.1814Z" fill="currentColor"/>
    <path d="M1013.4 212.77H970.172L963.267 185.715H904.767L897.868 212.77H854.643L908.369 2.64203H959.671L1013.4 212.77ZM932.082 76.2921L914.676 145.133H953.364L935.958 76.2921H932.082Z" fill="currentColor"/>
    <path d="M1081.02 110.727V212.334H1039.07V2.20605H1084.92L1129.57 120.046L1174.23 2.20605H1220.08V212.334H1178.13V110.727L1146.66 182.273H1112.49L1081.02 110.727Z" fill="currentColor"/>
  </svg>
);

const CrossIcon = () => (
  <svg className="w-3 h-19 flex-shrink-0" viewBox="0 0 12 77" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 32.4832V44.518" stroke="white" strokeWidth="1.09091"/>
    <path d="M12 38.5006H0" stroke="white" strokeWidth="1.09091"/>
  </svg>
);

const ArrowIcon = ({ className = "w-[53px] h-4 flex-shrink-0" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 53 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.98439 7.78941H51.2971M51.2971 7.78941L44.9198 1.08105M51.2971 7.78941L44.9198 14.4978" stroke="currentColor" strokeWidth="1.67709"/>
  </svg>
);

export default function Index() {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [selectedTransformation, setSelectedTransformation] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      setParallaxOffset(rate);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeModal = () => {
    setSelectedTransformation(null);
  };

  return (
    <div className="min-h-screen w-full bg-black">
      {/* Top Navigation Section - FREEGAME logo at the top - NOW TRANSPARENT AND OVERLAYING */}
		<section className="absolute top-0 left-0 right-0 z-50 bg-transparent">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
								<div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6">
					<div className="order-2 lg:order-1 max-w-[260px]">
						<div className="relative">
						</div>
					</div>

					<div className="order-1 lg:order-2 flex-1 flex justify-center">
						<div className="flex items-center gap-6">
							<Link to="#" className="group text-center">
								<div className="text-white font-inter text-sm uppercase group-hover:text-red-700 transition-colors">Gallery</div>
								<div className="h-px bg-red-700 mt-1 group-hover:bg-white transition-colors w-[65px] mx-auto"></div>
							</Link>
							<Link to="#" className="group text-center">
								<div className="text-white font-inter text-sm uppercase group-hover:text-red-700 transition-colors">Transformations</div>
								<div className="h-px bg-red-700 mt-1 group-hover:bg-white transition-colors w-[140px] mx-auto"></div>
							</Link>
							<Link to="#" className="group text-center">
								<div className="text-white font-inter text-sm uppercase group-hover:text-red-700 transition-colors">Contact</div>
								<div className="h-px bg-red-700 mt-1 group-hover:bg-white transition-colors w-[70px] mx-auto"></div>
							</Link>
						</div>
					</div>
				</div>


			</div>
		</section>

      {/* Hero Section - Black Background with Header Content */}
      <section className="relative w-full bg-black py-16">
        {/* Hero Content */}
        <div className="relative z-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-6">
                <div className="text-center">
                  <div className="text-white font-milker text-5xl lg:text-9xl xl:text-[10rem] font-normal leading-tight tracking-[0.2em] uppercase">
                    <span className="block lg:inline text-red-700">TH PT</span>
                  </div>
                  <div className="text-white font-inter text-lg lg:text-xl leading-[19.6px] tracking-[-0.32px] uppercase mt-4">
                    Coach, Athlete, Educator & Dad
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gym Image Section with Buttons and Text */}
      <section className="relative h-[1600px] w-full bg-transparent">
        <div className="absolute inset-0 overflow-hidden z-0">
          <img 
            src="/smiling-attractive-bodybuilder-with-naked-torso-is-doing-leg-strechening-grey-background.webp" 
            alt="Gym background" 
            className="w-full h-full object-cover transform scale-110"
            style={{ 
              objectPosition: 'center 60%',
              transform: `translateY(${parallaxOffset}px) scale(1.1)`
            }}
          />
          
        </div>
        
        {/* Content Overlay */}
        <div className="sticky top-0 z-10 h-screen flex flex-col justify-start items-center pt-[450px]">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center gap-8">
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="group bg-red-700 hover:bg-red-800 text-white px-6 py-3 font-inter text-sm lg:text-base uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    START
                  </button>
                  <button className="group border-2 border-white hover:border-red-700 text-white hover:text-red-700 px-6 py-3 font-inter text-sm lg:text-base uppercase tracking-wide transition-all duration-300 transform hover:scale-105">
                    WhatsApp me NOW
                  </button>
                </div>

                {/* Navigation Bar */}
                <div className="w-full max-w-3xl border-t border-white pt-5 pb-4">
                  <div className="flex justify-center items-center">
                    <div className="text-center">
                      <p className="text-white font-inter text-sm sm:text-base lg:text-[15.875px] leading-tight lg:leading-[22.4px] tracking-[-0.32px] uppercase">
                        Turning everyday guys into <span className="text-red-700 font-bold">MEN</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section className="bg-black pb-16 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="text-white font-arial text-3xl lg:text-[43px] font-black tracking-[-1.5px] uppercase">
              Transformations
            </div>
            <div className="h-px w-20 bg-red-700 mx-auto"></div>
            <div className="text-white/80 font-inter text-sm lg:text-base uppercase">
              Real clients. Real results.
            </div>
          </div>

          <div className="mt-12 space-y-8">
            {[
              {
                name: 'James P.',
                weeks: 12,
                weight: '-10kg',
                bodyFat: '-7% bf',
                note: '+ strength',
                image: '/trans1.jpg'
              },
              {
                name: 'Ethan R.',
                weeks: 16,
                weight: '-14kg',
                bodyFat: '-9% bf',
                note: '+ discipline',
                image: '/trans2.jpg'
              },
              {
                name: 'Liam S.',
                weeks: 10,
                weight: '-8kg',
                bodyFat: '-5% bf',
                note: '+ energy',
                image: '/trans3.jpg'
              }
            ].map((t, idx) => (
              <div 
                key={idx} 
                className="group border border-white/10 bg-black/40 hover:border-red-700 transition-colors duration-300 cursor-pointer"
                onClick={() => setSelectedTransformation(t)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={t.image} 
                    alt={`${t.name} transformation`} 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="text-white font-inter text-xs lg:text-sm uppercase tracking-[-0.32px]">{t.name}</div>
                    <div className="text-white/60 font-inter text-[10px] uppercase">{t.weeks} weeks</div>
                  </div>
                  <div className="flex gap-3 text-[11px] lg:text-xs uppercase">
                    <span className="text-red-700 font-bold">{t.weight}</span>
                    <span className="text-white/80">{t.bodyFat}</span>
                    <span className="text-white/80">{t.note}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="bg-red-700 py-8 lg:py-12 px-16 lg:px-24 text-center group hover:bg-white transition-all duration-300 cursor-pointer">
              <div className="flex justify-center items-center gap-4">
                <div className="text-white font-inter text-lg lg:text-[18.594px] leading-7 tracking-[-0.32px] uppercase group-hover:text-black transition-all duration-300">
                  View more transformations
                </div>
                <ArrowIcon className="w-[53px] h-4 text-white group-hover:text-black transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Players By Players Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
              <div className="text-black font-arial text-2xl sm:text-3xl lg:text-[31.688px] font-black leading-tight lg:leading-[43.68px] tracking-[-1.92px] uppercase">
                For
              </div>
              <div className="text-black font-arial text-2xl sm:text-3xl lg:text-[31.875px] font-black leading-tight lg:leading-[43.68px] tracking-[-1.92px] uppercase">
                Real
              </div>
              <div className="text-black font-arial text-2xl sm:text-3xl lg:text-[31.875px] font-black leading-tight lg:leading-[43.68px] tracking-[-1.92px] uppercase">
                Results
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
              <div className="text-black font-inter text-xs lg:text-[12.578px] leading-tight lg:leading-[19.6px] tracking-[-0.32px] uppercase">
                TH PT
              </div>
              <div className="text-black font-inter text-sm lg:text-sm leading-tight lg:leading-[19.6px] tracking-[-0.32px] uppercase">
                We stand by the person,<br/>not just the numbers
              </div>
              <div className="text-black font-inter text-xs lg:text-[12.578px] leading-tight lg:leading-[19.6px] tracking-[-0.32px] uppercase">
                Coaching
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full max-w-lg lg:max-w-[620px] aspect-square relative group">
                <div className="absolute inset-0 transform rotate-0 lg:rotate-[-3.16deg] transition-transform duration-500 group-hover:rotate-0 bg-red-700 flex items-center justify-center shadow-2xl">
                  <div className="text-white font-inter text-2xl lg:text-4xl font-bold uppercase tracking-wide">
                    SIGN UP
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image divider */}
      <img 
        src="https://api.builder.io/api/v1/image/assets/TEMP/53ef46719ceeb2d8d6abb6dd5edbbabe162a313d?width=2880" 
        alt="Image divider" 
        className="h-32 lg:h-[230.99px] w-full object-cover"
        style={{ objectPosition: 'center 10%' }}
      />

      {/* Principles Section */}
      <section className="bg-black py-16 lg:py-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-20">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8">
              <div className="flex-1 text-center order-2 lg:order-2 max-w-xs lg:max-w-none">
                <div className="text-white font-milker text-xl lg:text-3xl font-normal leading-tight tracking-[0.2em] uppercase whitespace-nowrap">
                  TH PT'S PRINCIPLES
                </div>
              </div>
              <div className="w-2 h-2 bg-red-700 mix-blend-difference flex-shrink-0 order-3 lg:order-3"></div>
            </div>
            
            <div className="space-y-8 lg:space-y-0">
              {[
                {
                  number: "001",
                  title: "Personalized Approach",
                  content: [
                    "Every client is unique, and so is their journey.",
                    "We create custom training programs that fit your lifestyle, goals, and current fitness level."
                  ]
                },
                {
                  number: "002",
                  title: "Holistic Development", 
                  content: [
                    "Physical transformation is just the beginning. We focus on mental strength, nutrition, and lifestyle habits to create lasting change."
                  ]
                },
                {
                  number: "003",
                  title: "Accountability & Support",
                  content: [
                    "Daily check-ins, progress tracking, and unwavering support to keep you motivated and on track."
                  ]
                },
                {
                  number: "004",
                  title: "Real Results",
                  content: [
                    "No quick fixes or empty promises.",
                    "We focus on sustainable progress that transforms not just your body, but your entire life."
                  ]
                },
                {
                  number: "005",
                  title: "Lifetime Transformation",
                  content: [
                    "Our goal isn't just to help you reach your goals, but to equip you with the knowledge and habits to maintain them forever."
                  ]
                }
              ].map((principle, index) => (
                <div key={index} className="border-t border-white/20 bg-black py-8 lg:py-12 hover:bg-white/5 transition-colors duration-300 group">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-3">
                      <div className="text-white font-arial text-lg lg:text-[18.266px] font-black leading-tight lg:leading-[25.48px] tracking-[-1.12px] uppercase group-hover:text-red-700">
                        {principle.title}
                      </div>
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      {principle.content.map((text, textIndex) => (
                        <div key={textIndex} className="text-white font-inter text-sm leading-tight lg:leading-[19.6px] tracking-[-0.32px] uppercase">
                          {text}
                        </div>
                      ))}
                    </div>
                    <div className="lg:col-span-2 lg:text-right">
                      <div className="text-red-700 font-inter text-sm leading-tight lg:leading-[19.6px] tracking-[-0.32px] uppercase font-bold">
                        {principle.number}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Reach out section */}
            <div className="bg-red-700 py-16 lg:py-20 text-center group hover:bg-white transition-all duration-300">
              <div className="flex justify-center items-center gap-4">
                <div className="text-white font-inter text-lg lg:text-[18.594px] leading-7 tracking-[-0.32px] uppercase group-hover:text-black transition-all duration-300 cursor-pointer">
                  Ready to transform?
                </div>
                <ArrowIcon className="w-[53px] h-4 text-white group-hover:text-black transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FreeGame Process Section - MOVED HERE after the Reach out section */}
      <section className="bg-white py-16 lg:py-44">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-8">
              <div className="text-black font-arial text-2xl lg:text-[31.313px] font-black leading-tight lg:leading-[43.68px] tracking-[-1.92px] uppercase">
                TH PT'S<br/>Process
              </div>
              <div className="h-px bg-red-700 w-20"></div>
            </div>
            
            <div className="space-y-6">
              <div className="text-black font-inter text-base leading-tight lg:leading-[22.4px] tracking-[-0.32px] uppercase">
                The TH PT Process empowers you to take control of your transformation journey. You don't always get to control life's challenges, but you can determine how you respond and grow stronger through them.
              </div>
              <div className="text-black font-inter text-base leading-tight lg:leading-[22.4px] tracking-[-0.32px] uppercase">
                Our proven system teaches you how to effectively leverage the things you have control over to make better decisions that will leave you feeling like the CEO of your own transformation rather than the victim of circumstances.
              </div>
              <div className="text-red-700 font-inter text-sm lg:text-[13.125px] leading-tight lg:leading-[22.4px] tracking-[-0.32px] uppercase font-bold">
                #OwnYourTransformation
              </div>
            </div>
          </div>
          
          {/* Process Steps */}
          <div className="mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "We start with a comprehensive evaluation of your current fitness level, goals, and lifestyle to create your personalized roadmap."
              },
              {
                step: "02", 
                title: "Implementation",
                description: "Step-by-step guidance through your custom program with daily support and accountability to ensure consistent progress."
              },
              {
                step: "03",
                title: "Transformation",
                description: "Celebrate your achievements and learn how to maintain your results for life with sustainable habits and knowledge."
              }
            ].map((process, index) => (
              <div key={index} className="group text-center p-6 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-red-700 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-800 transition-colors duration-300">
                  <span className="text-white font-bold text-xl">{process.step}</span>
                </div>
                <div className="text-black font-arial text-xl font-black uppercase mb-3 group-hover:text-red-700 transition-colors duration-300">
                  {process.title}
                </div>
                <div className="text-black font-inter text-sm leading-tight tracking-[-0.32px]">
                  {process.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Bottom Section */}
      <section className="relative h-[600px] w-full bg-black">
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-white font-arial text-4xl lg:text-6xl font-black leading-tight tracking-tight uppercase">
              READY TO START?
            </div>
            <div className="text-white/80 font-inter text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto">
              Your transformation journey begins with a single decision.
              Make it today.
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 font-inter text-sm lg:text-base uppercase tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                START NOW
              </button>
              <button className="border-2 border-white hover:border-red-700 text-white hover:text-red-700 px-8 py-4 font-inter text-sm lg:text-base uppercase tracking-wide transition-all duration-300 transform hover:scale-105">
                FREE CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Brand Section */}
            <div className="text-center lg:text-left space-y-4">
              <div className="text-white font-inter text-sm leading-relaxed tracking-[-0.32px] uppercase">
                Coach, Athlete, Educator & Dad<br/>
                <span className="text-red-700 font-bold">Turning everyday guys into MEN</span>
              </div>
            </div>
            

            
            <div className="lg:col-span-7 space-y-8">
              <div className="w-full h-px bg-white"></div>
              
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex flex-wrap items-start gap-4">
                  {['Coaching', 'Transformations', 'Gallery', 'Contact'].map((item, index) => (
                    <Link key={index} to="#" className="group">
                      <div className="text-white font-inter text-sm leading-tight tracking-[-0.32px] uppercase group-hover:text-red-700 transition-colors duration-300">
                        {item}
                      </div>
                      <div className={`h-px bg-red-700 mt-1 transition-all duration-300 group-hover:bg-white ${
                        item === 'Coaching' ? 'w-[85px]' : 
                        item === 'Transformations' ? 'w-[120px]' :
                        item === 'Gallery' ? 'w-[70px]' : 'w-[70px]'
                      }`}></div>
                    </Link>
                  ))}
                </div>
                
                <div className="flex items-start gap-4">
                  {/* Social Media Icons */}
                  <Link to="#" className="w-6 h-6 text-white hover:text-red-700 transition-colors duration-300">
                    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M4.5 3.90332C3.67157 3.90332 3 4.57489 3 5.40332V20.4033C3 21.2317 3.67157 21.9033 4.5 21.9033H19.5C20.3284 21.9033 21 21.2317 21 20.4033V5.40332C21 4.57489 20.3284 3.90332 19.5 3.90332H4.5ZM8.52076 7.90604C8.52639 8.86229 7.81061 9.45151 6.96123 9.44729C6.16107 9.44307 5.46357 8.80604 5.46779 7.90745C5.47201 7.06229 6.13998 6.38307 7.00764 6.40276C7.88795 6.42245 8.52639 7.06792 8.52076 7.90604ZM12.2797 10.6651H9.75971H9.7583V19.2249H12.4217V19.0252C12.4217 18.6453 12.4214 18.2653 12.4211 17.8852C12.4203 16.8714 12.4194 15.8565 12.4246 14.843C12.426 14.5969 12.4372 14.341 12.5005 14.1061C12.7381 13.2286 13.5271 12.6619 14.4074 12.8012C14.9727 12.8897 15.3467 13.2174 15.5042 13.7504C15.6013 14.0836 15.6449 14.4422 15.6491 14.7896C15.6605 15.8372 15.6589 16.8848 15.6573 17.9325C15.6567 18.3023 15.6561 18.6723 15.6561 19.0421V19.2235H18.328V19.0182C18.328 18.5662 18.3278 18.1143 18.3275 17.6624C18.327 16.5329 18.3264 15.4034 18.3294 14.2735C18.3308 13.763 18.276 13.2596 18.1508 12.766C17.9638 12.0319 17.5771 11.4244 16.9485 10.9857C16.5027 10.6735 16.0133 10.4724 15.4663 10.4499C15.404 10.4473 15.3412 10.4439 15.2781 10.4405C14.9984 10.4254 14.7141 10.4101 14.4467 10.464C13.6817 10.6173 13.0096 10.9674 12.5019 11.5847C12.4429 11.6555 12.3852 11.7274 12.2991 11.8347L12.2797 11.859V10.6651Z" fill="currentColor"/>
                    </svg>
                  </Link>
                  <Link to="#" className="w-6 h-6 text-white hover:text-red-700 transition-colors duration-300">
                    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M16 3.90332H8C5.23858 3.90332 3 6.1419 3 8.90332V16.9033C3 19.6647 5.23858 21.9033 8 21.9033H16C18.7614 21.9033 21 19.6647 21 16.9033V8.90332C21 6.1419 18.7614 3.90332 16 3.90332ZM19.25 16.9033C19.2445 18.6959 17.7926 20.1478 16 20.1533H8C6.20735 20.1478 4.75549 18.6959 4.75 16.9033V8.90332C4.75549 7.11067 6.20735 5.65881 8 5.65332H16C17.7926 5.65881 19.2445 7.11067 19.25 8.90332V16.9033ZM16.75 9.15332C17.3023 9.15332 17.75 8.7056 17.75 8.15332C17.75 7.60104 17.3023 7.15332 16.75 7.15332C16.1977 7.15332 15.75 7.60104 15.75 8.15332C15.75 8.7056 16.1977 9.15332 16.75 9.15332ZM12 8.40332C9.51472 8.40332 7.5 10.418 7.5 12.9033C7.5 15.3886 9.51472 17.4033 12 17.4033C14.4853 17.4033 16.5 15.3886 16.5 12.9033C16.5027 11.709 16.0294 10.5629 15.1849 9.7184C14.3404 8.87391 13.1943 8.40066 12 8.40332ZM9.25 12.9033C9.25 14.4221 10.4812 15.6533 12 15.6533C13.5188 15.6533 14.75 14.4221 14.75 12.9033C14.75 11.3845 13.5188 10.1533 12 10.1533C10.4812 10.1533 9.25 11.3845 9.25 12.9033Z" fill="currentColor"/>
                    </svg>
                  </Link>
                  <Link to="#" className="w-6 h-6 text-white hover:text-red-700 transition-colors duration-300">
                    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6 6.72332C15.9166 5.94285 15.5399 4.94072 15.54 3.90332H12.45V16.3033C12.4266 16.9745 12.1435 17.6104 11.6603 18.0768C11.1771 18.5432 10.5316 18.8037 9.85997 18.8033C8.43997 18.8033 7.25997 17.6433 7.25997 16.2033C7.25997 14.4833 8.91997 13.1933 10.63 13.7233V10.5633C7.17997 10.1033 4.15997 12.7833 4.15997 16.2033C4.15997 19.5333 6.91997 21.9033 9.84997 21.9033C12.99 21.9033 15.54 19.3533 15.54 16.2033V9.91332C16.793 10.8132 18.2973 11.296 19.84 11.2933V8.20332C19.84 8.20332 17.96 8.29332 16.6 6.72332Z" fill="currentColor"/>
                    </svg>
                  </Link>
                  <Link to="#" className="w-6 h-6 text-white hover:text-red-700 transition-colors duration-300">
                    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.1761 4.90332H19.9362L13.9061 11.6807L21 20.9033H15.4456L11.0951 15.3099L6.11723 20.9033H3.35544L9.80517 13.6541L3 4.90332H8.69545L12.6279 10.0159L17.1761 4.90332ZM16.2073 19.2787H17.7368L7.86441 6.4426H6.2232L16.2073 19.2787Z" fill="currentColor"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20 text-center">
              <div className="text-white/70 font-inter text-xs uppercase">
                © {new Date().getFullYear()} TH PT Coaching. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Transformation Modal */}
      {selectedTransformation && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-black border border-white/20 max-w-3xl w-full">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-red-700 hover:bg-red-800 text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="p-6">
                <div className="mb-4">
                  <img 
                    src={selectedTransformation.image} 
                    alt={`${selectedTransformation.name} transformation`} 
                    className="w-full max-h-[50vh] h-auto object-cover"
                  />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-arial text-xl font-black uppercase tracking-[-1px]">
                      {selectedTransformation.name}
                    </h3>
                    <div className="text-white/80 font-inter text-sm uppercase">
                      {selectedTransformation.weeks} weeks
                    </div>
                  </div>
                  
                  <div className="flex gap-4 text-sm uppercase">
                    <span className="text-red-700 font-bold">{selectedTransformation.weight}</span>
                    <span className="text-white/80">{selectedTransformation.bodyFat}</span>
                    <span className="text-white/80">{selectedTransformation.note}</span>
                  </div>
                  
                  <div className="text-white/80 font-inter text-sm leading-relaxed">
                    This transformation represents the dedication and commitment of {selectedTransformation.name} to their fitness journey. 
                    Through consistent training, proper nutrition, and unwavering determination, they achieved remarkable results in just {selectedTransformation.weeks} weeks.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
