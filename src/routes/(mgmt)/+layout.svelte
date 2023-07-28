<script>
    import {signOut} from "@auth/sveltekit/client";

    export let data

</script>

<div class=" z-0 top-0 w-screen h-[17px] relative bg-gray-500 text-center text-xs grid grid-cols-2">
   <div class=" left-0 w-fit ml-3 max-md:opacity-0 pointer-events-none select-none">
       Welcome, {data.session.user.email}
   </div>
    <button class=" relative z-10 right-0  pr-3 text-right font-extrabold text-red-950 underline uppercase" on:click={() => {signOut({callbackUrl:"/"})}}>
        LOGOUT
    </button>

</div>

<slot />