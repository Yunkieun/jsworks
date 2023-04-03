 let words = [];

        words[0] = "당신은 지금도 최고고, 이전에도 최고였으며 앞으로도 최고일것이다.";
        words[1] = "성공하는 사람은 실패하는데 익숙한 사람이다.";
        words[2] = "후회를 최대한 이용하라, 깊이 후회한다는 것은 새로운 삶을 산다는 것이다.";
        words[3] = "가짜 친구는 소문을 믿고, 진짜 친구는 나를 믿는다.";
        words[4] = "성공이라는 못을 박으려면 끈질감이라는 망치가 필요하다.";
        words[5] = "인생은 자전거를 타는 것이다. 균형을 유지하려면 계속 움직여야한다."

       //  words.length -> 0번에서 시작
        let rand = Math.floor(Math.random()*words.length);
        document.write(words[rand]);