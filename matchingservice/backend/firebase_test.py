# Test Class to Connect with Flask - Need to Change to Allow Parameters Later
class FirebaseData:

    def __init__(self, names):
        self.lNames = []
        self.fNames = []
        self.totalNames = []

    def get_lnames(self):  # Need to Change to Take in Parameters from other class Instead
        for outputs in final_output:
            self.lNames.append(outputs['lName'])
        return self.lNames

    def get_fnames(self):  # Need to Change to Take Parameters in from other class Instead
        for outputs in final_output:
            self.fNames.append(outputs['fname'])
        return self.fNames

    def get_completenames(self):
        for outputs in final_output:
            self.totalNames.append(outputs)
        return self.totalNames


print(FirebaseData.get_completenames(final_output))
