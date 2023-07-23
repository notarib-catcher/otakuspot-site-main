<script>
    import bgimg from "../../assets/bg.webp"
</script>

<img src={bgimg} class="min-h-screen w-screen object-cover fixed -z-50 brightness-[20%] bgfadein">
<div class="fadeinafterbg">
    <slot />
</div>

<style>

    .bgfadein{
        animation-name: fadeinbg;
        animation-fill-mode: forwards;
        animation-duration: 500ms;
    }

    @keyframes fadeinbg{
        0%{
            filter: invert(100%) brightness(40%);
        }

        100%{
            filter: invert(0) brightness(20%);
        }
    }

    .fadeinafterbg{
        animation-name: fadeinpostbg;
        animation-fill-mode: forwards;
        animation-duration: 1000ms;
    }

    @keyframes fadeinpostbg{
        0%{
            opacity: 0;
            transform: translateY(-10px);
        }
        50%{
            opacity: 0;
            transform: translateY(-10px);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>