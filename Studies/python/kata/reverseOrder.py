## Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

def digitilize(n):
    if n == 0:
        return [0]

    digits = []
    while n > 0:
        digits.append(n % 10)
        n = n // 10
    return digits         


# return list(map(int, reversed(str(number))))    