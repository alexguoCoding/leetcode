class Solution {
    Deque<Integer> number = new LinkedList<>();
    Deque<Character> operator = new LinkedList<>();

    public int calculate(String s) {
        s = s.replace(" ", "");
        s = s.replace("(-", "(0-");
        s = s.replace("(+", "(0+");

        if (s.charAt(0) == '-') {
            s = "0" + s;
        }

        char[] ch1 = s.toCharArray();

        int num = 0;

        for (int i = 0; i < ch1.length; i++) {
            if (i < ch1.length && Character.isDigit(ch1[i])) {
                while (i < ch1.length && Character.isDigit(ch1[i]) == true) {
                    num = num * 10 + ch1[i] - '0';
                    i++;
                }
                number.addLast(num);
                num = 0;

            }

            if (i == ch1.length) {
                break;
            }
            if (ch1[i] == '(') {
                operator.addLast(ch1[i]);
                operator.addLast('+');
            }
            if (ch1[i] == '-' || ch1[i] == '+') {
                operator.addLast(ch1[i]);
            } else if (ch1[i] == ')') {

                number.addLast(0);
                while (operator.size() > 0 && operator.getLast() != '(') {
                    cal();
                }

                operator.removeLast();

            }
        }
        operator.addFirst('+');
        number.addLast(0);
        while (operator.size() != 0) {

            cal();
            // number.addLast(0);
        }
        return number.pollFirst();

    }

    public void cal() {
        if (number.isEmpty() || number.size() < 2)
            return;
        if (operator.isEmpty())
            return;

        int num1 = number.pollLast();
        int num2 = number.pollLast();
        char oper = operator.pollLast();
        System.out.println(num1 + "num1");
        System.out.println(num2 + "num2");
        // System.out.println(oper);
        int num3 = 0;
        if (oper == '+') {
            num3 = num1 + num2;

        } else if (oper == '-') {
            num3 = num1 - num2;

        }
        System.out.println(num3 + "num3");
        number.addLast(num3);
    }
}