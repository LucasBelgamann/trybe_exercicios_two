def maior(n, z):
    if n > z:
        print("o maior é n", n)
    else:
        print("o maior é z", z)

maior(4, 5)

def media(lista):
    print(sum(lista) / len(lista))

media([3, 5, 3, 6])

def square(n):
    print(n * 'x')

square(19)

def maiorNome(list):
    print(max(list, key=len))

maiorNome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])

def paint_cost(wall_size):
    cans = wall_size / (18 * 3)
    total_cost = cans * 80
    print((round(cans), round(total_cost, 2))) 

paint_cost(200)

def triangle_type(a, b, c):
    if (a + b > c) and (a + c > b) and (b + c > a):
        if a == b == c:
            print("equilátero")
        elif a == b or a == c or b == c:
            print("isósceles")
        else:
            print("escaleno")
    else:
        print("não é triângulo")

triangle_type(24,24,26)