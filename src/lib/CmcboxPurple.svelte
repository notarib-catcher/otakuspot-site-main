
<div class="h-fit w-fit p-[10px] moveme">
    <div class="   h-[400px] w-[70vw] sm:w-[60vw] md:w-[35vw] lg:w-[25vw] border-black border-4 rounded-sm shadow-2xl moveme">
    </div>
</div>


<style>
    .moveme:hover > div{
        box-shadow: 10px 10px #B000EE;
        transform: translateY(-10px) translateX(-10px);
        transition: all 400ms;
    }

    .moveme:focus > div{
        box-shadow: 10px 10px #B000EE;
        transform: translateY(-10px) translateX(-10px);
        transition: all 400ms;
    }

    .moveme > div{
        box-shadow: 0px 0px black;
        transform: translateY(0) translateX(0);
        transition: all 400ms;
    }

    @keyframes movethebox {
        0%{

        }

        100%{

        }
    }
</style>