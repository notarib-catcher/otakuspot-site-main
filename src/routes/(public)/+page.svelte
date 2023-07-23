

<script>
    import otakuLOGO from "../../assets/OtakuSpot.svg";
    import discordICON from "../../assets/discord.svg";
    import whatsappICON from "../../assets/whatsapp.svg";
</script>

<div class=" h-screen flex flex-col items-center justify-center">
    <img src = {otakuLOGO} class="w-[60%] max-md:w-[90%] object-cover top-0 left-0 z-10 fadeinAnim1" alt="Otaku logo">
    <div class=" w-screen h-fit max-md:mt-5 mt-8 flex flex-row items-center justify-center align-middle">
        <button class=" fadeinIcon2 hover:scale-110 focus:scale-110 transition-all duration-200  md:p-4 p-[10px]  w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full bg-black z-20 bg-opacity-30 hover:backdrop-blur-sm hover:bg-opacity-60 focus:backdrop-blur-sm focus:bg-opacity-60" on:click = {() => {window.location = "https://discord.gg/JnC56TVBU9"}}>
            <img src={discordICON} class=" w-full h-full" alt="discord">
        </button>
        <button class=" fadeinIcon1 ml-3 hover:scale-110 focus:scale-110 transition-all duration-200  md:p-4 p-[10px]  w-[70px] h-[70px] md:w-[100px] md:h-[100px] rounded-full bg-black z-20 bg-opacity-30 hover:backdrop-blur-sm hover:bg-opacity-60 focus:backdrop-blur-sm focus:bg-opacity-60" on:click = {() => {window.location = "https://chat.whatsapp.com/LubpL3LX7uDBh95FNIJgsi"}}>
            <img src={whatsappICON} class=" w-full h-full" alt="whatsapp">
        </button>

    </div>
</div>

<style>
    @keyframes fadein1 {
        0% {
            transform: translateY(-50px);
            opacity:0.1;
        }

        2% {
            opacity:1;

        }
        8% {
            opacity:0.1;
            filter: motionBlur(10px);
        }
        9% {
            opacity:1;

        }
        12% {
            opacity:0.1;

        }
        20% {
            opacity:1;

        }
        25% {
            opacity:0.3;

        }
        30% {
            opacity:1;

        }

        70% {
            opacity:0.7;

        }

        72% {
            opacity:0.2;

        }

        77% {
            opacity:.9;

        }
        100% {
            transform: translateY(0px);
            opacity:.9;

        }
    }

    .fadeinAnim1{
        animation: fadein1 ease-out 1250ms;
        filter: motionBlur(10px);
    }

    @keyframes icon1 {
        0%{
            opacity: 0;
        }
        80%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    @keyframes icon2 {
        0%{
            opacity: 0;
        }
        90%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
    .fadeinIcon1{
        animation: icon1 ease-out 1250ms;
    }
    .fadeinIcon2{
        animation: icon2 ease-out 1250ms;
    }
</style>