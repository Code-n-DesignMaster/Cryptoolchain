const _c = console.log;
const fuse = require('fusejs');

var fsModel = function () { var s = this;
	if (!(s instanceof fsModel)) return new fsModel();
	return s;
};

fsModel.prototype.init = function (connInfo) { _c('CONNECTED TO FUSE: ', connInfo); };
fsModel.prototype.destroy = function () { _c('DISCONNECTED FROM FUSE'); };
fsModel.prototype.lookup = function (ctx, parent, name, reply) {};
fsModel.prototype.forget = function (ctx, inode, lookupCount, reply) {};
fsModel.prototype.multiforget = function (ctx, forgetData, reply) {};
fsModel.prototype.getattr = function (ctx, inode, reply) {};
fsModel.prototype.setattr = function (ctx, inode, attr, reply) {};
fsModel.prototype.readlink = function (ctx, inode, reply) {};
fsModel.prototype.mknod = function (ctx, parent, name, mode, rdev, reply) {};
fsModel.prototype.mkdir = function (ctx, parent, name, mode, reply) {};
fsModel.prototype.unlink = function (ctx, parent, name, reply) {};
fsModel.prototype.rmdir = function (ctx, parent, name, reply) {};
fsModel.prototype.symlink = function (ctx, parent, link, name, reply) {};
fsModel.prototype.link = function (ctx, inode, newParent, newName, reply) {};
fsModel.prototype.rename = function (ctx, parent, name, newParent, newName, reply) {};
fsModel.prototype.open = function (ctx, inode, fileInfo, reply) {};
fsModel.prototype.read = function (ctx, inode, length, offset, fileInfo, reply) {};
fsModel.prototype.write = function (ctx, inode, buffer, position, fileInfo, reply) {};
fsModel.prototype.flush = function (ctx, inode, fileInfo, reply) {};
fsModel.prototype.fsync = function (ctx, inode, dataSync, fileInfo, reply) {};
fsModel.prototype.fsyncdir = function (ctx, inode, dataSync, fileInfo, reply) {};
fsModel.prototype.opendir = function (ctx, inode, fileInfo, reply) {};
fsModel.prototype.readdir = function (ctx, inode, length, offset, fileInfo, reply) {};
fsModel.prototype.release = function (ctx, inode, fileInfo, reply) {};
fsModel.prototype.releasedir = function (ctx, inode, fileInfo, reply) {};
fsModel.prototype.statfs = function (ctx, inode, reply) {};
fsModel.prototype.getxattr = function (ctx, inode, name, length, reply) {};
fsModel.prototype.setxattr = function (ctx, inode, name, value, length, flags, reply) {};
fsModel.prototype.listxattr = function (ctx, inode, length, reply) {};
fsModel.prototype.removexattr = function (ctx, inode, name, reply) {};
fsModel.prototype.access = function (ctx, inode, mask, reply) {};
fsModel.prototype.create = function (ctx, parent, name, mode, fileInfo, reply) {};
fsModel.prototype.getlk = function (ctx, inode, fileInfo, lock, reply) {};
fsModel.prototype.setlk = function (ctx, inode, fileInfo, lock, sleep, reply) {};
fsModel.prototype.bmap = function (ctx, inode, length, blockIndex, reply) {};
fsModel.prototype.ioctl = function (ctx, inode, cmd, cargs, fileInfo, flags, bInput, bSize, obSize, reply) {};
fsModel.prototype.poll = function (ctx, inode, fileInfo, pollHandle, reply) {};