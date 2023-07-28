<script>
    import bg from "../assets/bg.webp"
    import {signIn} from "@auth/sveltekit/client";

    import { browser } from '$app/environment';
    import {page} from '$app/stores'

    let isUnauth = false
    if(browser){
        const urlParams = new URLSearchParams(window.location.search);
        isUnauth = urlParams.has('unauth');

        window.history.pushState({}, document.title, window.location.pathname);
    }
</script>

<div>
    <div class=" h-screen w-screen bg-transparent overflow-hidden flex flex-col items-center align-middle justify-center">
        <div class = "absolute top-0 w-screen h-fit z-20 pointer-events-none">
            {#if isUnauth}
                <div class=" backdrop-blur-xl bg-red-700 bg-clip-text text-transparent text-2xl font-semibold h-[50px] w-fit p-2 font-mono rounded-lg mx-auto ModalPopIn backgroundpan">
                    Unauthorized
                </div>
            {/if}
        </div>
        <div class=" h-[200px] w-[300px] bg-white bg-opacity-20 rounded-3xl border-white border-[2px] flex flex-col items-center align-middle justify-center">
            <button class=" movedown fontpoppins h-[50px] min-w-[150px] max-w-fit duration-100 hover:border-b-[4px] text-white border-white" on:click={() => {signIn("google",{callbackUrl: "/postlogin"})}}>
                Login with Google
            </button>
        </div>
    </div>
    <img src={bg} class=" object-cover min-h-screen min-w-full fixed top-0 left-0 -z-10" style="filter: brightness(20%)">
</div>

<style>

    .movedown{
        transform: translateY(0);
    }
    .movedown:hover {
        transform: translateY(2px);
    }
    .ModalPopIn{
        transform: translateY(-100px);
        animation-name: login;
        animation-duration: 4000ms;
        animation-iteration-count: 1;
        animation-fill-mode: forward;
    }



    @keyframes login{
        0%{
            transform: translateY(-55px);
        }
        25%{
            transform: translateY(0px);
        }
        50%{
            transform: translateY(0px);
        }
        100%{
            transform: translateY(-55px);
        }
    }
</style>