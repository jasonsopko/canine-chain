// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: filetree/files.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Files struct {
	Address        string `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`
	Contents       string `protobuf:"bytes,2,opt,name=contents,proto3" json:"contents,omitempty"`
	Owner          string `protobuf:"bytes,3,opt,name=owner,proto3" json:"owner,omitempty"`
	ViewingAccess  string `protobuf:"bytes,4,opt,name=viewingAccess,proto3" json:"viewingAccess,omitempty"`
	EditAccess     string `protobuf:"bytes,5,opt,name=editAccess,proto3" json:"editAccess,omitempty"`
	TrackingNumber string `protobuf:"bytes,6,opt,name=trackingNumber,proto3" json:"trackingNumber,omitempty"`
}

func (m *Files) Reset()         { *m = Files{} }
func (m *Files) String() string { return proto.CompactTextString(m) }
func (*Files) ProtoMessage()    {}
func (*Files) Descriptor() ([]byte, []int) {
	return fileDescriptor_42ffe5de8e9f1432, []int{0}
}
func (m *Files) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Files) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Files.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Files) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Files.Merge(m, src)
}
func (m *Files) XXX_Size() int {
	return m.Size()
}
func (m *Files) XXX_DiscardUnknown() {
	xxx_messageInfo_Files.DiscardUnknown(m)
}

var xxx_messageInfo_Files proto.InternalMessageInfo

func (m *Files) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func (m *Files) GetContents() string {
	if m != nil {
		return m.Contents
	}
	return ""
}

func (m *Files) GetOwner() string {
	if m != nil {
		return m.Owner
	}
	return ""
}

func (m *Files) GetViewingAccess() string {
	if m != nil {
		return m.ViewingAccess
	}
	return ""
}

func (m *Files) GetEditAccess() string {
	if m != nil {
		return m.EditAccess
	}
	return ""
}

func (m *Files) GetTrackingNumber() string {
	if m != nil {
		return m.TrackingNumber
	}
	return ""
}

func init() {
	proto.RegisterType((*Files)(nil), "jackaldao.canine.filetree.Files")
}

func init() { proto.RegisterFile("filetree/files.proto", fileDescriptor_42ffe5de8e9f1432) }

var fileDescriptor_42ffe5de8e9f1432 = []byte{
	// 249 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x5c, 0x90, 0xb1, 0x4e, 0xc3, 0x30,
	0x14, 0x45, 0x63, 0x20, 0x05, 0x9e, 0x04, 0x83, 0xd5, 0xc1, 0x30, 0x58, 0x08, 0x21, 0xc4, 0x52,
	0x7b, 0xe0, 0x0b, 0x60, 0x80, 0x8d, 0x81, 0x91, 0xcd, 0xb1, 0x1f, 0xc1, 0xb4, 0xb5, 0x2b, 0xdb,
	0xa5, 0xf0, 0x17, 0xfc, 0x12, 0x1b, 0x63, 0x47, 0x46, 0x94, 0xfc, 0x08, 0x8a, 0x43, 0x2b, 0xe8,
	0xf6, 0xee, 0xbd, 0x47, 0x6f, 0x38, 0x30, 0x7c, 0xb4, 0x13, 0x4c, 0x01, 0x51, 0x76, 0x47, 0x14,
	0xb3, 0xe0, 0x93, 0xa7, 0x47, 0xcf, 0x4a, 0x8f, 0xd5, 0xc4, 0x28, 0x2f, 0xb4, 0x72, 0xd6, 0xa1,
	0x58, 0x61, 0xa7, 0x1f, 0x04, 0xca, 0x9b, 0x0e, 0xa5, 0x0c, 0x76, 0x95, 0x31, 0x01, 0x63, 0x64,
	0xe4, 0x84, 0x5c, 0xec, 0xdf, 0xaf, 0x22, 0x3d, 0x86, 0x3d, 0xed, 0x5d, 0x42, 0x97, 0x22, 0xdb,
	0xca, 0xd3, 0x3a, 0xd3, 0x21, 0x94, 0x7e, 0xe1, 0x30, 0xb0, 0xed, 0x3c, 0xf4, 0x81, 0x9e, 0xc1,
	0xc1, 0x8b, 0xc5, 0x85, 0x75, 0xf5, 0x95, 0xd6, 0xdd, 0xc7, 0x9d, 0xbc, 0xfe, 0x2f, 0x29, 0x07,
	0x40, 0x63, 0xd3, 0x2f, 0x52, 0x66, 0xe4, 0x4f, 0x43, 0xcf, 0xe1, 0x30, 0x05, 0xa5, 0xc7, 0xd6,
	0xd5, 0x77, 0xf3, 0x69, 0x85, 0x81, 0x0d, 0x32, 0xb3, 0xd1, 0x5e, 0xdf, 0x7e, 0x36, 0x9c, 0x2c,
	0x1b, 0x4e, 0xbe, 0x1b, 0x4e, 0xde, 0x5b, 0x5e, 0x2c, 0x5b, 0x5e, 0x7c, 0xb5, 0xbc, 0x78, 0x18,
	0xd5, 0x36, 0x3d, 0xcd, 0x2b, 0xa1, 0xfd, 0x54, 0xf6, 0x0e, 0x46, 0x46, 0x79, 0xd9, 0x4b, 0x90,
	0xaf, 0x72, 0x6d, 0x2b, 0xbd, 0xcd, 0x30, 0x56, 0x83, 0xac, 0xeb, 0xf2, 0x27, 0x00, 0x00, 0xff,
	0xff, 0x77, 0x58, 0xab, 0xcc, 0x46, 0x01, 0x00, 0x00,
}

func (m *Files) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Files) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Files) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.TrackingNumber) > 0 {
		i -= len(m.TrackingNumber)
		copy(dAtA[i:], m.TrackingNumber)
		i = encodeVarintFiles(dAtA, i, uint64(len(m.TrackingNumber)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.EditAccess) > 0 {
		i -= len(m.EditAccess)
		copy(dAtA[i:], m.EditAccess)
		i = encodeVarintFiles(dAtA, i, uint64(len(m.EditAccess)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.ViewingAccess) > 0 {
		i -= len(m.ViewingAccess)
		copy(dAtA[i:], m.ViewingAccess)
		i = encodeVarintFiles(dAtA, i, uint64(len(m.ViewingAccess)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Owner) > 0 {
		i -= len(m.Owner)
		copy(dAtA[i:], m.Owner)
		i = encodeVarintFiles(dAtA, i, uint64(len(m.Owner)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Contents) > 0 {
		i -= len(m.Contents)
		copy(dAtA[i:], m.Contents)
		i = encodeVarintFiles(dAtA, i, uint64(len(m.Contents)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Address) > 0 {
		i -= len(m.Address)
		copy(dAtA[i:], m.Address)
		i = encodeVarintFiles(dAtA, i, uint64(len(m.Address)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintFiles(dAtA []byte, offset int, v uint64) int {
	offset -= sovFiles(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Files) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Address)
	if l > 0 {
		n += 1 + l + sovFiles(uint64(l))
	}
	l = len(m.Contents)
	if l > 0 {
		n += 1 + l + sovFiles(uint64(l))
	}
	l = len(m.Owner)
	if l > 0 {
		n += 1 + l + sovFiles(uint64(l))
	}
	l = len(m.ViewingAccess)
	if l > 0 {
		n += 1 + l + sovFiles(uint64(l))
	}
	l = len(m.EditAccess)
	if l > 0 {
		n += 1 + l + sovFiles(uint64(l))
	}
	l = len(m.TrackingNumber)
	if l > 0 {
		n += 1 + l + sovFiles(uint64(l))
	}
	return n
}

func sovFiles(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozFiles(x uint64) (n int) {
	return sovFiles(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Files) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowFiles
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Files: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Files: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Address", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFiles
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthFiles
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFiles
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Address = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Contents", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFiles
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthFiles
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFiles
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Contents = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Owner", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFiles
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthFiles
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFiles
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Owner = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ViewingAccess", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFiles
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthFiles
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFiles
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ViewingAccess = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field EditAccess", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFiles
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthFiles
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFiles
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.EditAccess = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field TrackingNumber", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFiles
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthFiles
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFiles
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.TrackingNumber = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipFiles(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthFiles
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipFiles(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowFiles
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowFiles
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowFiles
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthFiles
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupFiles
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthFiles
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthFiles        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowFiles          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupFiles = fmt.Errorf("proto: unexpected end of group")
)
