from flask import Flask, render_template, request, redirect
import os.path
from os import path

global whichfilename;
whichfilename = "LoginAccounts.doc";
app = Flask(__name__)

@app.route("/")
def main():
    return render_template("GetInformation.html");

@app.route("/info",methods=["POST"])
def GetInfo():
    global username
    global userpasswd
    username = request.form.get('txtusername');
    userpasswd = request.form.get('txtpassword');
    if(username == "" or userpasswd == ""):
        return render_template("GetInformation");
    else:
        CreateFileCheck();
        return render_template("output1.html", username = username, password = userpasswd);

def CreateFileCheck():
    fileDir = os.path.dirname(os.path.realpath("__file__"));
    fileexist = bool(path.exists(whichfilename));
    if (fileexist == False):
        status = "new";
    else:
        status = "edit"

    WriteToFile(status);

def WriteToFile(whichstatus):
    if(whichstatus == "new"):
        logaccfile = open(whichfilename,"x")
        logaccfile.close();
        logaccfile = open(whichfilename,"w")
    else:
        logaccfile = open(whichfilename,"a")

    logaccfile.write(str(username) + " " + str(userpasswd));

if __name__ =="__main__":
    app.run();
