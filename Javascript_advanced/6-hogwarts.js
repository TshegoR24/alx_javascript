class studentHogwarts:
    privateScore = 0
    name = None
    def __init__(self, newName):
        self.name = newName
    def changeScoreBy(self, points):
        self.privateScore += points
    def setName(self, newName):
        self.name = newName
    def rewardStudent(self):
        self.changeScoreBy(1)
    def penalizeStudent(self):
        self.changeScoreBy(-1)
    def getScore(self):
        return f"{self.name}: {self.privateScore}"
harry = studentHogwarts("Harry")
harry.rewardStudent()
harry.rewardStudent()
harry.rewardStudent()
harry.rewardStudent()
print(harry.getScore())
draco = studentHogwarts("Draco")
draco.rewardStudent()
draco.penalizeStudent()
draco.penalizeStudent()
draco.penalizeStudent()
print(draco.getScore())