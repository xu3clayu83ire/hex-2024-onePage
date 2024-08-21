<template>
    <div class="kata2024 container">
        <div class="kata-wrap">
            <div class="kata-content">
                <ul class="kata-items-wrap">
                    <!---->
                    <li class="kata-item">
                        <img src="https://images.unsplash.com/photo-1723451119471-dff8dd414e80?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            width="96" height="96" alt="">

                        <div class="kata-item-textarea">
                            <h2 class="title">
                                Title Lorem..
                            </h2>
                            <p class="text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, odio dolorem molestiae
                                quibusdam?
                            </p>
                        </div>
                    </li>
                    <!---->
                    <li class="kata-item">
                        <img src="https://images.unsplash.com/photo-1723451119471-dff8dd414e80?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            width="96" height="96" alt="">
                        <div class="kata-item-textarea">
                            <h2 class="title">
                                Title Lorem..
                            </h2>
                            <P class="text">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, odio dolorem molestiae
                                quibusdam?
                            </P>
                        </div>
                    </li>
                    <!---->
                </ul>
                <div>
                    <img src="https://images.unsplash.com/photo-1723451119471-dff8dd414e80?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        width="216" height="216" alt="">
                </div>
            </div>
            <div class="kata-footer">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, odio dolorem molestiae
                    quibusdam
                    culpa architecto facilis? Exercitationem molestiae itaque neque ab cum a eos, voluptatum
                    dolores
                    animi accusantium illum modi.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.kata2024 img {
    display: block;
}

.kata-wrap {
    width: 640px;
    margin: 50px auto 0;
    font-size: 16px;
    line-height: 1.5;
}

.kata-content,
.kata-item {
    display: flex;
    align-items: center;
}

/**.kata-item */
.kata-item:not(:last-child) {
    margin-bottom: 24px;
}

.kata-item .kata-item-textarea {
    max-width: 288px;
    margin: 0 20px;
}

.kata-item .kata-item-textarea .title {
    font-size: 20px;
    line-height: 1.2;
}


/**.kata-footer */
.kata-footer {
    margin-top: 24px;
    min-height: 120px;
}
</style>


<script setup>
</script>