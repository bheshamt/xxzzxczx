from flask import Flask, render_template, request, redirect
import os.path
from os import path

global whichfilename;
whichfilename = "LoginAccounts.doc";
app = Flask(__name__)

@app.route("/", methods=["GET"])
def main():
    return render_template("GetInformation.html")

@app.route("/info",methods=["POST"])
def GetInfo():
    global username
    global userpasswd
    username = request.form.get('txtusername');
    userpasswd = request.form.get('txtpassword');
    if(username == "" or userpasswd == ""):
        return render_template("GetInformation.html")
    
    CreateFileCheck();
    with open(whichfilename, "r") as f:
        lines = f.readlines()
        lastcred = lines[-1].strip().split() if lines else ["", ""]
    
    return render_template("output1.html",
                           username=lastcred[0],
                           password=lastcred[1])

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
