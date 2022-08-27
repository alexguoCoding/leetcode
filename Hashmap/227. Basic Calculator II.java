class Solution {
    Map<Character, Integer> map = new HashMap<>();
    Deque<Integer> number = new LinkedList<>();
    Deque<Character> operator = new LinkedList<>();

    public int calculate(String s) {

        map.put('+', 1);
        map.put('-', 1);
        map.put('*', 2);
        map.put('/', 2);
        s = s.replace(" ", "");
        s = "0" + s;
        char[] ch1 = s.toCharArray();

        int num = 0;
        for (int i = 0; i < ch1.length; i++) {
            // System.out.println(ch1[i]+"ch1[i]");
            if (Character.isDigit(ch1[i])) {
                num = 0;

                while (i < ch1.length && Character.isDigit(ch1[i])) {
                    num = num * 10 + ch1[i] - '0';
                    i++;
                }
                i--;
                number.addFirst(num);
                if (operator.size() != 0 && map.get(operator.getFirst()) == 2) {
                    cal();
                }

            } else {

                operator.addFirst(ch1[i]);

            }
        }
        operator.addLast('+');
        number.addFirst(0);

        while (operator.size() != 0) {
            cal();
        }
        return number.getLast();

    }

    public void cal() {
        char op = operator.pollFirst();
        int num1 = number.pollFirst();
        int num2 = number.pollFirst();
        int num3 = 0;
        // System.out.println(op+"op");
        if (op == '*') {
            num3 = num1 * num2;
        } else if (op == '/') {
            num3 = num2 / num1;
        } else if (op == '+') {
            num3 = num2 + num1;
        } else if (op == '-') {
            num3 = num1 - num2;
        }

        number.addFirst(num3);
    }

}