(() => {
    class createTab {
        constructor() {
            const $doc = document;
            this.$tab = $doc.getElementById("js-tab");
            this.$nav = this.$tab.querySelectorAll("[data-nav]");
            this.$content = this.$tab.querySelectorAll("[data-content]");
            this.ACTIVE_CLASS = "is-active"
            this.navLen = this.$nav.length;

            this.init();

            let index = 0;
            while (index < this.navLen) {
                this.$nav[index].addEventListener("click", (e) => this.clickHandler(e));
                index++;
            }

        }

        init() {
            this.$content[0].style.display = "block";
        };

        clickHandler(e) {
            e.preventDefault();
                
            //クリックされたnavとそのdataを取得
            const $this = e.target;
            const targetVal = $this.dataset.nav;
    
            //contentとnavを全てリセットする
            let index = 0;
            while (index < this.navLen) {
                this.$content[index].style.display = "none";
                this.$nav[index].classList.remove(this.ACTIVE_CLASS);
                index++;
            }
    
            // 対象のコンテンツをアクティブ化する
            this.$tab.querySelectorAll(`[data-content="${targetVal}"]`)[0].style.display = 'block';
            this.$nav[targetVal].classList.add(this.ACTIVE_CLASS);
    
        }
    }

    new createTab();

}

)();