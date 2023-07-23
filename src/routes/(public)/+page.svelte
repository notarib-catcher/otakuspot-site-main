<script>
    import Banner from "$lib/Banner.svelte"
    import CmcboxYellow from "$lib/CmcboxYellow.svelte";
    import CmcboxPurple from "$lib/CmcboxPurple.svelte";
    import CmcboxBlack from "$lib/CmcboxBlurple.svelte";

</script>

<Banner />

<div class="w-screen flex flex-col items-center justify-center">
    <div class=" bg-slate-50 w-[95%] min-h-[100px] mb-10 border-4 border-black rounded-sm shadow-2xl p-4 flex flex-col md:flex-row  justify-center items-center flex-wrap">
        <CmcboxYellow /> <CmcboxYellow /> <CmcboxYellow />
        <CmcboxPurple /> <CmcboxPurple /> <CmcboxPurple />
        <CmcboxBlack /> <CmcboxBlack /> <CmcboxBlack />
    </div>
</div>