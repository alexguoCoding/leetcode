class Solution {
    Map<Character, Integer> map = new HashMap<>();
    Deque<Integer> number = new LinkedList<>();
    Deque<Character> operator = new LinkedList<>();

    public int calculate(String s) {
        s = s.replace(" ", "");
        s = s.replace("(-", "(0-");
        if (s.charAt(0) == '-') {
            s = "0" + s;
        }

        map.put('+', 1);
        map.put('-', 1);
        map.put('*', 2);
        map.put('/', 2);
        char[] ch1 = s.toCharArray();
        int num = 0;
        for (int i = 0; i < ch1.length; i++) {
            if (Character.isDigit(ch1[i])) {
                // System.out.println(ch1[i]);
                while (i < ch1.length && Character.isDigit(ch1[i])) {

                    num = num * 10 + ch1[i] - '0';
                    i++;
                }
                number.addFirst(num);
                // if(operator.size()!=0&&map.get(operator.getFirst())==2){
                // cal();

                // }
                i--;
            }

            else {
                if (ch1[i] == '(') {
                    operator.addFirst(ch1[i]);

                } else if (ch1[i] == ')') {
                    while (operator.size() != 0 && operator.getFirst() != '(') {
                        cal();
                    }
                    operator.removeFirst();
                } else {
                    if (operator.size() > 0) {
                        char past = operator.getFirst();
                        while ((operator.size() > 0 && operator.getFirst() != '(')
                                && map.get(ch1[i]) <= map.get(past)) {
                            cal();
                        }
                    }

                    operator.addFirst(ch1[i]);
                }
            }
            num = 0;

        }

        // while(operator.size()!=0){
        // cal();

        // }
        for (int i = 0; i < 2; i++) {
            cal();
        }
        return number.getFirst();

    }

    public void cal() {
        if (number.size() == 1 || number.size() == 0) {
            return;
        }
        int num1 = number.pollFirst();
        int num2 = number.pollFirst();
        char op = operator.pollFirst();
        int num3 = 0;

        if (op == '+') {
            num3 = num2 + num1;
        } else if (op == '-') {
            num3 = num2 - num1;
        }

        else if (op == '*') {
            num3 = num2 * num1;
        } else if (op == '/') {
            num3 = num2 / num1;
        }

        System.out.println("num1:" + num1);
        System.out.println("num2:" + num2);
        System.out.println("num3:" + num3);
        number.addFirst(num3);

    }
}