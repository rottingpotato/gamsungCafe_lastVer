class Light {
    constructor(){
        this.status = 0; // 얘 받아서 이미지 띄우기
    }
    update(){
        this.status++;
        if ((this.status) > (12*2)-1){ // 빛 그림 [00~11]->[11->00]. 근데 인덱스 0부터 시작이니 1빼기
            this.status = 0;
        }
    }
}