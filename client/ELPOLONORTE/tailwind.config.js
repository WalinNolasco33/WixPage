/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        principal: ["Oswald", "sans-serif"],
      },
      backgroundImage: {
        banner:
          "url('https://static.wixstatic.com/media/84770f_93b300330b3742f2b1948ef292a91f27~mv2_d_1920_1279_s_2.png/v1/fill/w_1280,h_683,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/84770f_93b300330b3742f2b1948ef292a91f27~mv2_d_1920_1279_s_2.png')",
        newcomers:
          "url('https://static.wixstatic.com/media/84770f_93b2185955e84e4fbeeecad36c77fedc~mv2_d_1920_1920_s_2.png/v1/fill/w_504,h_722,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/84770f_93b2185955e84e4fbeeecad36c77fedc~mv2_d_1920_1920_s_2.png')",
        "productos-1": "url('./public/a9ff3b_a4208166624c4a4db340fafae9038a40.png')",
        "productos-2": "url('./public/Images-google-lens-mochilas-2.png')",
        "productos-3": "url('./public/images-google-lens-mochila-3.png')",
        "abuot":"url('./public/84770f_0e8ed0ee72314e2f9c9f53e51ebc660f~mv2_d_2500_1366_s_2.webp')"
      },
      keyframes: {
        "slide-right": {
          "0%": {
            right: "100%",
          },
          "100%": {
            right: "0%",
          },
        },
        "slide-right-2": {
          "0%": {
            right: "150%",
          },
          "100%": {
            right: "0%",
          },
        },
      },
      
       
    
      animation:{
        "slide-right": "slide-right 1.5s",
        "slide-right-2":"slide-right-2 2s"
      },
      screens:{
        'phone':'612px'
      }
     
    },
   

    plugins: [],
  }
};
