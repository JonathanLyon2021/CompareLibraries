# CompareLibraries
This is strictly practice repository, it is not a program in which you can run and expect all the files to work together as one program. If you intend on using any of
this code you need to copy and paste each file seperately into VS Code(or whatever IDE you prefer) in order to run it. Each file is it's own program so to speak. These 
files do not work together for any reason. This repository is focused on comparing **Web3.js** and **Ethers.js** and seeing which one is a better library between the 
both. Checking the differences and also any similarities they might share. <br>
<br>
# Observations <br>
One key thing I notice that is different between these two libraries is that a lot of the **Web3.js** calls/methods are nested under `web3.utils` or `web3.eth` for 
example, whereas the calls/methods under **Ethers.js** are usually not nested that deep although there are some calls that are, most of them are not. Some methods do 
have similar nesting but **Ethers.js** library is more readable. <br>
<br>
# Key Takeaway's <br>
- **Web3.js** library you HAVE to use the entire ABI in your code which can be a pain becasue they are very big usually and also if you miss one little character like 
a comma or curly bracket or anything, the program will break. <br>
<br>
- **Ethers.js** you can use the solidity functions. You don't nessecarily have to know what the json ABI looks like. A lot of developers prefer this over copying and 
pasting the entire ABI like we have to in **Web3.js**. <br>
