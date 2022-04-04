from flask import Flask
from flask import jsonify
import pandas as pd
import json
import pyodbc

#Employee Class 
class employee(object):
    def __init__(self, name, index, incident, accessCount, helpCount, failCount, accessTime, helpTime, failTime,sub,contactType, helpEmail,
    helpPhone, helpOther, acceessEmail, accessPhone, accessOther, failEmail, failPhone, failOther,createdOn, tickets ):
        self.name = name
        self.incident = incident
        self.accessCount = accessCount
        self.helpCount = helpCount
        self.failCount = failCount
        self.accessTime = accessTime
        self.helpTime = helpTime
        self.failTime = failTime
        self.subCats = sub
        self.index = index
        self.time = accessTime + helpTime + failTime
        self.assistanceSoftware = 0
        self.assistanceHardware = 0
        self.infoRequest = 0
        self.passwordReset = 0
        self.unlockAccount = 0
        self.serviceDegradation = 0
        self.serviceDown = 0
        self.contactType = contactType
        self.email = 0
        self.phone = 0
        self.other = 0
        self.helpEmail = helpEmail
        self.helpPhone = helpPhone
        self.helpOther = helpOther
        self.acceessEmail = acceessEmail
        self.accessPhone = accessPhone
        self.accessOther = accessOther
        self.failEmail = failEmail
        self.failPhone = failPhone
        self.failOther = failOther
        self.createdOn = createdOn
        self.tickets = tickets
    
    def to_dict(self):
        return {
            "name": str(self.name),
            "Incidents": self.incident,
            "AccessIncidents": self.accessCount,
            "AccessTime": self.accessTime,
            "HelpIncidents": self.helpCount,
            "helpTime": self.helpTime,
            "FailCount": self.failCount,
            "FailTime": self.failTime,
            "SubCats": self.subCats,
            "time": self.time,
            "assistanceSoftware": self.assistanceSoftware,
            "assistanceHardware": self.assistanceHardware,
            "infoRequest": self.infoRequest,
            "passwordReset": self.passwordReset,
            "unlockAccount": self.unlockAccount,
            "serviceDegradation": self.serviceDegradation,
            "serviceDown": self.serviceDown,
            "contactType": self.contactType,
            "index": self.index,
            "emailCount": self.email,
            "phoneCount": self.phone,
            "otherCount": self.other,
            "accessEmail": self.acceessEmail,
            "accessPhone": self.accessPhone,
            "accessOther": self.accessOther,
            "helpEmail": self.helpEmail,
            "helpPhone": self.helpPhone,
            "helpOther": self.helpOther,
            "failEmail": self.failEmail,
            "failPhone": self.failPhone,
            "failOther": self.failOther,
            "createdOn": self.createdOn,
            "tickets": self.tickets,

        }

class incident(object):
    def __init__(self,index, assignedTo, caller, timeCreated, contactType, state, priority, subcategory, category, resolveTime):
        self.index = index
        self.assignedTo = assignedTo
        self.caller = caller
        self.timeCreated = timeCreated
        self.contactType = contactType
        self.state = state
        self.priority = priority
        self.subcategory = subcategory
        self.category = category
        self.resolveTime = resolveTime
    def to_dict(self):
        return{
            "index": self.index,
            "assignedTo": self.assignedTo,
            "caller": self.caller,
            "timeCreated": self.timeCreated,
            'contactType': self.contactType,
            "state": self.state,
            "priority": self.priority,
            "subcategory":self.subcategory,
            "category": self.category,
            "resolveTime":self.resolveTime
        }

class contact(object):
    def __init__(self,name):
        self.contactType = name
        self.count = 0
        self.AccessCount = 0
        self.helpCount= 0
        self.failCount = 0

    def to_dict(self):
        return{
            "contactType": str(self.contactType),
            "count":self.count,
            "AccessCount": self.AccessCount,
            "helpCount": self.helpCount,
            "failCount": self.failCount
        }

#Read in the Data



conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=BH0119DWR02933\SQLEXPRESS;'
                      'Database=helpdesk;'
                      'Trusted_Connection=Yes;')

data = pd.read_sql_query('SELECT * from incident', conn)

df1 = data[['assigned_to', 'category', 'calendar_stc','subcategory','contact_type', 'sys_created_on', 'caller_id', 'state', 'priority', ]]
ser = pd.Series(df1['assigned_to'])

#Loop through data
name = df1.loc[0][0]
x = 0
employeeList = []
contactType = []
sub = []
accessCount = 0
helpCount = 0
failCount = 0
accessTime = 0
helpTime = 0
failTime = 0
count = 0
time = 0
soft = 0
hard = 0
ir = 0
ua = 0
pr = 0
sdif = 0
sd = 0
contacList = []
helpEmail = 0
helpPhone = 0
helpOther = 0
accessEmail = 0
accessPhone = 0
accessOther = 0
failEmail = 0
failPhone = 0 
failOther = 0
createdOn = []
tickets = []
f = 0


while x < ser.size:

    try:
        s = df1.loc[x][5]
        s = s[-5:].replace(" ", "")
        createdOn.append(s.replace(":","."))
    except:
        s = df1.loc[x][5]
        createdOn.append(s.replace(":","."))
    if(name == df1.loc[x][0]):
        count += 1
        ticket = incident(x, df1.loc[x][0], df1.loc[x][6], df1.loc[x][5],df1.loc[x][4],df1.loc[x][7],df1.loc[x][8],df1.loc[x][3],df1.loc[x][1], df1.loc[x][2])
        tickets.append(ticket)
        if(df1.loc[x][1] == "Help / Assistance"):
            helpCount += 1
            try:
                
                helpTime += int(df1.loc[x][2])
                time += int(df1.loc[x][2])
            except:
                helpTime += int(df1.loc[x][2].replace(',',''))
                time += int(df1.loc[x][2].replace(',',''))
            sub.append(df1.loc[x][3])
            contactType.append(df1.loc[x][4])
            if(df1.loc[x][4] == "Phone"):
                helpPhone += 1
            elif(df1.loc[x][4] == "Email"):
                helpEmail += 1
            else:
                helpOther += 1
        
        elif(df1.loc[x][1] == "Access"):
            accessCount += 1
            try:
                accessTime += int(df1.loc[x][2])
                time += int(df1.loc[x][2])
            except:
                accessTime += int(df1.loc[x][2].replace(',',''))
                time += int(df1.loc[x][2].replace(',',''))
            sub.append(df1.loc[x][3])
            contactType.append(df1.loc[x][4])
            if(df1.loc[x][4] == "Phone"):
                accessPhone += 1
            elif (df1.loc[x][4] == "Email"):
                accessEmail += 1
            else:
                accessOther += 1

        elif(df1.loc[x][1] == "Fault / Failure"):
            failCount += 1
            try:
                failTime += int(df1.loc[x][2])
                time += int(df1.loc[x][2])
            except:
                failTime += int(df1.loc[x][2].replace(',', ''))
                time += int(df1.loc[x][2].replace(',',''))
            sub.append(df1.loc[x][3])
            contactType.append(df1.loc[x][4])
            if df1.loc[x][4] == "Phone":
                failPhone += 1
            elif(df1.loc[x][4] == 'Email'):
                failEmail += 1
            else:
                failOther += 1
        else:
            f+=1
        x+=1
    else:
        employeeList.append(employee(name,x, count, accessCount, helpCount, failCount, accessTime, helpTime, failTime, sub, contactType, helpEmail, helpPhone, helpOther, accessEmail, accessPhone, accessOther, failEmail, failPhone, failOther, createdOn, tickets))
        name = df1.loc[x][0]
        tickets = []
        count = 0
        time = 0
        accessCount = 0
        helpCount = 0
        failCount = 0
        accessTime = 0
        helpTime = 0
        failTime = 0
        sub = []
        contactType = []
        helpEmail = 0
        helpPhone = 0
        helpOther = 0
        acceessEmail = 0
        accessPhone = 0
        accessOther = 0
        failEmail = 0
        failPhone = 0 
        failOther = 0
        createdOn = []   
    

employeeList.append(employee(name, x, count, accessCount, helpCount, failCount, accessTime, helpTime, failTime, sub, contactType, helpEmail, helpPhone, helpOther, acceessEmail, accessPhone,accessOther, failEmail, failPhone, failOther, createdOn, tickets))
contacList.append(contact("Phone"))
contacList.append(contact("Email"))
contacList.append(contact('other'))




for ele in employeeList:
   
    for cat in ele.subCats:
        if cat == "Assistance using Application / Software":
            ele.assistanceSoftware += 1
        elif cat == "Assistance using Hardware":
            ele.assistanceHardware += 1
        elif cat == "Information Request":
            ele.infoRequest += 1
        elif cat == "Password Reset":
            ele.passwordReset += 1
        elif cat == "Unlock Account":
            ele.unlockAccount += 1
        elif cat == "Service Down":
            ele.serviceDown += 1
        elif cat == "Service Degradation / Intermittent Failure":
            ele.serviceDegradation += 1


for ele in employeeList:
    for cont in ele.contactType:
        if cont == "Email":
            ele.email += 1
        elif cont == "Phone":
            ele.phone += 1
        else:
            ele.other += 1


#Create server
members = Flask(__name__)
contacts = Flask(__name__)

for ele in employeeList:
    incidents = []
    for i in ele.tickets:
        incident = i.to_dict()
        incidents.append(incident)
    ele.tickets = incidents
        

results = [obj.to_dict() for obj in employeeList]
results.sort(key= lambda obj: obj['index'])
jsdata = json.dumps(results)








 


@members.route("/members")

def getMembers():
    return jsdata

if __name__ == '__main__':
    members.run(debug=True)
    
