<script>
    import {signOut} from "@auth/sveltekit/client";
    import {onMount} from "svelte";

    export let data;

    onMount(async () => {
        if(data.logout){
            await signOut({callbackUrl: "/?unauth=true"})
        }
    })
</script>