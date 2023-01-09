class Solution {
    LinkedList<String> list = new LinkedList<>();
    HashSet<String> visited = new HashSet<>();
    HashSet<String> deadEnd = new HashSet<>();

    public int openLock(String[] deadends, String target) {
        for (String str : deadends) {
            deadEnd.add(str);
        }

        list.add("0000");
        int step = 0;
        visited.add("0000");

        while (list.size() > 0) {

            int size = list.size();
            // System.out.println(size);
            for (int i = 0; i < size; i++) {
                String temp = list.removeFirst();
                // System.out.println(temp);
                if (target.equals(temp)) {
                    return step;
                } else if (deadEnd.contains(temp)) {
                    // LinkedList<String> templist = new LinkedList<>();

                    // System.out.println( tempchar[i] );
                } else {
                    openLock(temp.toCharArray());
                }
            }

            step++;
        }
        return -1;
    }

    public void openLock(char[] tempchar) {
        for (int i = 0; i < 4; i++) {
            char savechar = tempchar[i];
            // System.out.println((char) Character.getNumericValue(savechar)+1);
            if (tempchar[i] == '9') {
                tempchar[i] = '0';
            } else {
                // System.out.println(tempchar[i]+1);
                tempchar[i] = (char) (tempchar[i] + 1);

                // System.out.println( tempchar[i] );

            }
            String tempString = String.valueOf(tempchar);
            // System.out.println(tempString);
            // System.out.println(tempString);
            if (!visited.contains(tempString)) {
                if (!deadEnd.contains(tempString)) {
                    visited.add(tempString);
                    list.add(tempString);
                }
            }
            tempchar[i] = savechar;
            if (tempchar[i] == '0') {
                tempchar[i] = '9';
            } else {
                tempchar[i] = (char) (tempchar[i] - 1);
            }

            tempString = String.valueOf(tempchar);
            // System.out.println(tempString);
            if (!visited.contains(tempString)) {
                if (!deadEnd.contains(tempString)) {
                    visited.add(tempString);
                    list.add(tempString);
                }
            }
            tempchar[i] = savechar;
        }
    }
}
