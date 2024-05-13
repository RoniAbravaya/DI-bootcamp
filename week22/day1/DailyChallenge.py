import math

class Circle:
    def __init__(self, radius=None, diameter=None):
        if radius is not None:
            self.radius = radius
        elif diameter is not None:
            self.radius = diameter / 2
        else:
            raise ValueError("Please provide either radius or diameter.")
    
    @property
    def diameter(self):
        return self.radius * 2
    
    @diameter.setter
    def diameter(self, value):
        self.radius = value / 2
    
    @property
    def area(self):
        return math.pi * (self.radius ** 2)
    
    def __repr__(self):
        return f"Circle(radius={self.radius})"
    
    def __add__(self, other):
        return Circle(radius=self.radius + other.radius)
    
    def __lt__(self, other):
        return self.radius < other.radius
    
    def __le__(self, other):
        return self.radius <= other.radius
    
    def __eq__(self, other):
        return self.radius == other.radius
    
    def __gt__(self, other):
        return self.radius > other.radius
    
    def __ge__(self, other):
        return self.radius >= other.radius

# Example usage:
circle1 = Circle(radius=3)
circle2 = Circle(diameter=10)
print(circle1)
print(circle2)

print("Area of circle1:", circle1.area)
print("Diameter of circle2:", circle2.diameter)

circle3 = circle1 + circle2
print("Circle3:", circle3)

print("Is circle1 less than circle2?", circle1 < circle2)
print("Is circle1 equal to circle2?", circle1 == circle2)

circle_list = [Circle(radius=5), Circle(radius=2), Circle(radius=7)]
sorted_circles = sorted(circle_list)
print("Sorted circles:", sorted_circles)
