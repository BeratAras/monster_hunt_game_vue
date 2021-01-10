new Vue({
    el: "#app",
    data: {
        player_heal: 100,
        monster_heal: 100,
        game_is_on: false,
    },
    methods: {
        start_game(){
            this.game_is_on = true;
        },
        attack(){
            var point = Math.ceil(Math.random() * 10);
            this.monster_heal -= point;
            this.monster_attack();
            this.is_game_over();
        },
        special_attack(){
            var point = Math.ceil(Math.random() * 20);
            this.monster_heal -= point;
            this.monster_attack();
            this.is_game_over();
        },
        heal_up(){
            this.player_heal += 20;
            if(this.player_heal == 100 || this.player_heal > 100){
                alert('Daha Fazla Can Alamazsın');
                this.player_heal -= 20;
            }
            this.monster_attack();
        },
        give_up(){
            alert('Pes Ettiniz. Kazanan Canavar');
            this.game_is_on = false;
            this.game_over();
        },
        monster_attack(){
            var point = Math.ceil(Math.random() * 10);
            this.player_heal -= point;
        },
        is_game_over(){
            if(this.player_heal < 0){
                alert('Canavar Kazandı.');
                this.game_over();
            }else if(this.monster_heal < 0){
                alert('Kazandın. Canavar Geberdi!');
                this.game_over();
            }
        },
        game_over(){
            this.player_heal = 100;
            this.monster_heal = 100;
            this.game_is_on = false;
        }
    }
})