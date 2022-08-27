public class ZigzagIterator {
    Deque<Integer> deque=new LinkedList<>();
     Deque<Integer> l1=new LinkedList<>();
       Deque<Integer> l2=new LinkedList<>();

    public ZigzagIterator(List<Integer> v1, List<Integer> v2) {
        for(int i=0;i<v1.size();i++){
            l1.addFirst(v1.get(i));
        }
        for(int i=0;i<v2.size();i++){
            l2.addFirst(v2.get(i));
        }
        while(l1.size()!=0&&l2.size()!=0){
            deque.addLast(l1.pollLast());
            deque.addLast(l2.pollLast());
        }
        while(l1.size()!=0){
            deque.addLast(l1.pollLast());

        }
        while(l2.size()!=0){
            deque.addLast(l2.pollLast());

        }
        

        
    }

    public int next() {
        return deque.pollFirst();
        
    }

    public boolean hasNext() {
        if(deque.size()!=0){
            return true;
        }
        return false;
        
    }
}

/**
 * Your ZigzagIterator object will be instantiated and called as such:
 * ZigzagIterator i = new ZigzagIterator(v1, v2);
 * while (i.hasNext()) v[f()] = i.next();
 */