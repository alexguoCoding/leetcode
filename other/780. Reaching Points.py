class Solution:
    def reachingPoints(self, sx: int, sy: int, tx: int, ty: int) -> bool:
        while ty>sy and tx>sx and tx!=ty:
            if ty>tx:
                ty=ty%tx
            elif ty<tx:
                tx=tx%ty

            print('tx',tx,'ty',ty)

        if ty==sy and tx==sx:
            return True
        elif tx==sx and ty>sy:
                if (ty-sy)%tx==0:
                    return True

        elif ty==sy and tx>sx:
                if (tx-sx)%sy==0:
                    return True
        return False
            
            