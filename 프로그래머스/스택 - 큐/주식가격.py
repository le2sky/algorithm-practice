#https://programmers.co.kr/learn/courses/30/lessons/42584?language=python3
def solution(prices):
    answer = []
    count = 0
    for i in range(0, len(prices)):
        count = 0
        for j in range(i+1, len(prices)):
            if prices[i] <= prices[j]:
                count +=1
            else :
                count += 1
                break
        answer.append(count)
    
    return answer